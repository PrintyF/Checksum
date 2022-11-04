import {Component, OnInit} from '@angular/core';

@Component({
  selector: 'app-checksum',
  templateUrl: './checksum.component.html',
  styleUrls: ['./checksum.component.css']
})
export class ChecksumComponent implements OnInit {

  constructor() {
  }

  validateAccount(account: string): boolean {
    let accountNumber: number = Number.parseInt(account);

    return this.checkSum(accountNumber) % 11 === 0;
  }

  private checkSum(accountNumber: number): number {
    let sum = 0;
    for (let factor = 1; factor < 10; factor++) {
      const units =  accountNumber % 10;
      accountNumber = Math.floor(accountNumber/10);
      sum += units*factor;
    }
    return sum;
  }

  ngOnInit(): void {
  }

}
