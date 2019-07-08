import { DatabaseService } from './database.service';
import { Component, OnInit } from '@angular/core';
import { FormGroup, FormControl, Validators } from '@angular/forms';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit {
  title = 'MobileApp';
  rows = [];
  userform: FormGroup;
  submitting = false;


  constructor(private db: DatabaseService) { }

  async ngOnInit() {
    this.userform = new FormGroup({
      name: new FormControl(null, [Validators.required]),
      info: new FormControl(null, [Validators.required])
    });
    await this.db.query('CREATE TABLE IF NOT EXISTS users(name TEXT PRIMARY KEY, info TEXT )', []);
    const r1 = await this.db.query('SELECT * FROM users', []);
    if (r1.rows.length > 0) {
      this.rows = r1.rows;
    }

  }

  async update() {
    const res = await this.db.query('SELECT * FROM users', []);
    this.rows = res.rows;
  }

  async onSubmit() {
    this.submitting = true;
    const sqlStatement = 'INSERT INTO users(name,info) values (?,?)';

    const name = this.userform.get('name').value;
    const info = this.userform.get('info').value;
    const result = await this.db.query(sqlStatement, [name, info]);
    this.submitting = false;
    this.update();
  }
}
