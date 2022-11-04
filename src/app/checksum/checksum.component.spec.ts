import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ChecksumComponent } from './checksum.component';

describe('ChecksumComponent', () => {
  let component: ChecksumComponent;
  let fixture: ComponentFixture<ChecksumComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ChecksumComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ChecksumComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });

  describe('Checksum', () => {
    it(`should be true for 000000000`, () => {
      const fixture = TestBed.createComponent(ChecksumComponent);
      const checksumComponent = fixture.componentInstance;
      const response = checksumComponent.checksum('000000000');
      expect(response).toBeTrue();
    });

    it(`should be false for 000000001`, () => {
      const fixture = TestBed.createComponent(ChecksumComponent);
      const checksumComponent = fixture.componentInstance;
      const response = checksumComponent.checksum('000000001');
      expect(response).toBeFalse();
    });

    it(`should be false for 000000002`, () => {
      const fixture = TestBed.createComponent(ChecksumComponent);
      const checksumComponent = fixture.componentInstance;
      const response = checksumComponent.checksum('000000002');
      expect(response).toBeFalse();
    });

    it(`should be true for 000000051`, () => {
      const fixture = TestBed.createComponent(ChecksumComponent);
      const checksumComponent = fixture.componentInstance;
      const response = checksumComponent.checksum('000000051');
      expect(response).toBeTrue();
    });

    it(`should be true for 000000035`, () => {
      const fixture = TestBed.createComponent(ChecksumComponent);
      const checksumComponent = fixture.componentInstance;
      const response = checksumComponent.checksum('000000035');
      expect(response).toBeTrue();
    });

  })
});
