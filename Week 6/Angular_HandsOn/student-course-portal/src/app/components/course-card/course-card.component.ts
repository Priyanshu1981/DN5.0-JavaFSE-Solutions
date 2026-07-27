import { Component, EventEmitter, Input, Output, OnChanges, SimpleChanges } from '@angular/core';
import { CommonModule } from '@angular/common';
import { Course } from '../../models/course.model';
import { CreditLabelPipe } from '../../pipes/credit-label.pipe';
import { HighlightDirective } from '../../directives/highlight.directive';

@Component({
  selector: 'app-course-card',
  standalone: true,
  imports: [CommonModule, CreditLabelPipe, HighlightDirective],
  templateUrl: './course-card.component.html',
  styleUrl: './course-card.component.css'
})
export class CourseCardComponent implements OnChanges {
  // Hands-on 2 Task 3 — data flows down via @Input
  @Input() course!: Course;

  // Hands-on 2 Task 3 — events bubble up via @Output, strongly typed
  @Output() enrollRequested = new EventEmitter<number>();

  isExpanded = false;
  enrolled = false;

  // Hands-on 3 Task 2 — getter keeps the template free of inline object
  // literals, which makes it easier to read and easier to unit test.
  get cardClasses() {
    return {
      'card--enrolled': this.enrolled,
      'card--full': this.course?.credits >= 4,
      expanded: this.isExpanded
    };
  }

  get borderColor(): string {
    switch (this.course?.gradeStatus) {
      case 'passed': return 'green';
      case 'failed': return 'red';
      default: return 'grey';
    }
  }

  toggleExpanded(): void {
    this.isExpanded = !this.isExpanded;
  }

  onEnrollClick(): void {
    this.enrolled = !this.enrolled;
    this.enrollRequested.emit(this.course.id);
  }

  // Hands-on 2 Task 2 — logs previous/current value whenever @Input changes.
  ngOnChanges(changes: SimpleChanges): void {
    if (changes['course']) {
      console.log(
        'course changed — previous:', changes['course'].previousValue,
        'current:', changes['course'].currentValue
      );
    }
  }
}
