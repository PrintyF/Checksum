import {Component, OnInit} from '@angular/core';

@Component({
  selector: 'app-checksum',
  templateUrl: './checksum.component.html',
  styleUrls: ['./checksum.component.css']
})
export class ChecksumComponent implements OnInit {

  constructor() {
  }

  checksum(account: string): boolean {
    let accountNumber : number = Number.parseInt(account);

  return (accountNumber % 10 + accountNumber / 10 * 2) % 11 === 0
  }

  ngOnInit(): void {
  }

}
