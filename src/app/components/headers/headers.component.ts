import { Component } from '@angular/core';

@Component({
  selector: 'app-headers',
  templateUrl: './headers.component.html',
  styleUrls: ['./headers.component.css'],
})
export class HeadersComponent {
  title = 'Task Tracker';
  toggleAddTask() {
    console.log('Add' );
  }
}
