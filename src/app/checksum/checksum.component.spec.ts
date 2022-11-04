import {ComponentFixture, TestBed} from '@angular/core/testing';

import {ChecksumComponent} from './checksum.component';

describe('ChecksumComponent', () => {
  let checksumComponent: ChecksumComponent;
  let fixture: ComponentFixture<ChecksumComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ChecksumComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ChecksumComponent);
    checksumComponent = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(checksumComponent).toBeTruthy();
  });

  describe('validateAccount', () => {

    describe('in one digit case', () => {
      it(`should be true for 000000000`, () => {
        expect(checksumComponent.validateAccount('000000000')).toBeTrue();
      });

      it(`should be false for 000000001`, () => {
        expect(checksumComponent.validateAccount('000000001')).toBeFalse();
      });

      it(`should be false for 000000002`, () => {
        expect(checksumComponent.validateAccount('000000002')).toBeFalse();
      });
    });

    describe('in two digits case', () => {
      it(`should be true for 000000035 because (3*2+5*1) % 11 === 0`, () => {
        expect(checksumComponent.validateAccount('000000035')).toBeTrue();
      });

      it(`should be true for 000000051  because (5*2+1*1) % 11 === 0`, () => {
        expect(checksumComponent.validateAccount('000000051')).toBeTrue();
      });
    });

    describe('in three digits case', () => {
      it(`should be true for 000000442  because (4*3+4*2+2*1) % 11 === 0`, () => {
        expect(checksumComponent.validateAccount('000000442')).toBeTrue();
      });
      it(`should be false for 000000342  because (3*3+4*2+2*1) % 11 != 0`, () => {
        expect(checksumComponent.validateAccount('000000342')).toBeFalse();
      });
    });
    describe('in nine digits case', () => {
      it(`should be true for 902542346`, () => {
        expect(checksumComponent.validateAccount('902542346')).toBeTrue();
      });
      it(`should be false for 505687420`, () => {
        expect(checksumComponent.validateAccount('505687420')).toBeFalse();
      });

    });


  })
});
