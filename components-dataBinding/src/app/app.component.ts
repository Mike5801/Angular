import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  serverElements = [{type: 'server', name: 'Testserver', content:'Just a test!'}];
  
  title = 'components-dataBinding';

  appCounter: number = 0;
  numbers: number[] = [];

  onServerAdded(serverData: {serverName: string, serverContent: string}) {
    this.serverElements.push({
      type: 'server',
      name: serverData.serverName,
      content: serverData.serverContent
    });
  }

  onBlueprintAdded(blueprintData: {blueprintName: string, blueprintContent: string}) {
    this.serverElements.push({
      type: 'blueprint',
      name: blueprintData.blueprintName,
      content: blueprintData.blueprintContent
    });
  }

  onGameStarted(gameStartData: { counter: number }) {
    this.appCounter = gameStartData.counter;
    this.numbers.push(gameStartData.counter);
  }

  onChangeFirst() {
    this.serverElements[0].name = 'Changed!';
  }

  onDestyorFirst() {
    this.serverElements.splice(0, 1);
  }
}
