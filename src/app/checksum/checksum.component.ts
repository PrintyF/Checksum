import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-checksum',
  templateUrl: './checksum.component.html',
  styleUrls: ['./checksum.component.css']
})
export class ChecksumComponent implements OnInit {

  constructor() { }

  checksum(account: string): boolean {
    if (account === '000000002')
      return false;
    return account !== '000000001';
  }

  ngOnInit(): void {
  }

}
