import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-hw-les1',
  templateUrl: './hw-les1.component.html',
  styleUrls: ['./hw-les1.component.css']
})
export class HwLes1Component implements OnInit {
  public bedWords!: string
  public bedWordsSpan: string = ``
  public valv!: string
  public star: string = `*`
  public strBedWords: Array<string> = []
  public strArea: Array<string> = []

  constructor() { }

  ngOnInit(): void {
  }

  reset(): void {
    this.bedWords = ``
    this.bedWordsSpan = ``
  }
  add(): void {
    if (this.bedWords != undefined) {
      this.bedWordsSpan += ` ` + this.bedWords
      this.bedWords = ``
    }
  }
  stars(count: number, symvol: string) {
    if (count) {
      for (let i = 0; i < count - 1; i++) {
        symvol += `*`
      }
    }
    return symvol
  }

  cenzor(): void {
    this.strArea = this.valv.split(` `)
    this.strBedWords = this.bedWordsSpan.split(` `)
    this.strBedWords.forEach(element => {
      let filtered: Array<string> = this.strArea.filter(e => e === element)
      filtered.forEach(el => {
        if (el === element && el != ``) {
          this.valv = this.valv.replace(el, this.stars(el.length, this.star))
        }
      })
    });
  }
}
