import { Component, OnInit, OnDestroy } from '@angular/core';

@Component({
  selector: 'app-image-loop',
  templateUrl: './image-loop.component.html',
  styleUrls: ['./image-loop.component.css']
})
export class ImageLoopComponent {
  images: string[] = [
    "images/בתי דפוס.webp",
    "images/לוח מודעות.avif",
    "images/תלייה.avif",
    "images/בתי דפוס.webp",
    "images/לוח מודעות.avif",
    "images/תלייה.avif",
    "images/בתי דפוס.webp",
    "images/לוח מודעות.avif",
    "images/תלייה.avif",
  ];
  startIndex: number = 0;
  visibleCount: number = 6;

  get visibleImages(): string[] {
    return this.images.slice(this.startIndex, this.startIndex + this.visibleCount);
  }

  next(): void {
    if (this.startIndex + this.visibleCount < this.images.length) {
      this.startIndex++;
    }
  }

  prev(): void {
    if (this.startIndex > 0) {
      this.startIndex--;
    }
  }
}