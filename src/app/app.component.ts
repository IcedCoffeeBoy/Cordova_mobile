import { DatabaseService } from './database.service';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit {
  title = 'MobileApp';
  rows = []

  constructor(private db: DatabaseService) { }

  async ngOnInit() {
    const r1 = await this.db.query("SELECT * FROM todo",[]);
    console.log(r1.rows);
    this.rows = r1.rows;
  }

  async onCreate() {
    const r1 = await this.db.query("CREATE TABLE IF NOT EXISTS todo(ID INTEGER PRIMARY KEY ASC, todo TEXT, added_on TEXT)", []);
    const r2 = await this.db.query("INSERT INTO todo(todo, added_on) VALUES (?,?)", ['my todo item', new Date().toUTCString()]);
    console.log(r2);
  }
}
