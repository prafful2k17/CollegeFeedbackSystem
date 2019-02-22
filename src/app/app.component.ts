import { Component } from '@angular/core';
import { Observable } from 'rxjs';

// Firebase Database
import { AngularFireDatabase } from 'angularfire2/database';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'College Feedback System';

  items: Observable<any[]>;

  constructor(public database: AngularFireDatabase) {
    /*  If you haven't already set up Firebase Real-Time Database, then ->
          1. Log on to your Firebase Account
          2. Create a Project and proceed the the setup instructions.
          3. Go on to the Database section on the left side of the screen.
          4. Choose Real-Time Database in the drop-down menu
          5. Click on rules.
          6. Set Read: true and Write: true
    */
    /*
      Get all documents in a collection ->
        <Database Instance>.list(<Collection Name>).valueChanges()
    */
    this.items = database.list('items').valueChanges();
  }

  sampleDatabaseTesting() {
    /*
      Inset a document into a collection ->
        <Database Instance>.list(<Collection Name>).push(<document>);
    */
    this.database.list('/items').push({
      content: {
        text: 'Hey I am a Software Developer',
        number: 2
      }
    });
  }

}
