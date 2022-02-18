import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PostLectureComponent } from './post-lecture.component';

describe('PostLectureComponent', () => {
  let component: PostLectureComponent;
  let fixture: ComponentFixture<PostLectureComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ PostLectureComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(PostLectureComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
