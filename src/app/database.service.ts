import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class DatabaseService {
  name = "admin";
  version = "1.0.0";
  displayName = "admin";
  estimatedSize = 1024 * 1024 // 1 MB;

  db = (<any>window).openDatabase(this.name, this.version, this.displayName, this.estimatedSize);

  constructor() { }

  query(statement: string, valueArray: string[]): Promise<any> {
    return new Promise((resolve, reject) => {
      this.db.transaction((tx) => {
        tx.executeSql(statement, valueArray, (tx, result) => {
          console.log(result);
          resolve(result);
        }, (error) => {
          console.log(error);
          reject(error);
        });
      });
    });
  }

}
