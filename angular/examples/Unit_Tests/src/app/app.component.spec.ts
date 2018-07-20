import { of } from 'rxjs';

import { AppComponent } from './app.component';
import { SendToServerService } from './send-to-server.service';

describe('AppComponent', () => {
  let uut: AppComponent;

  const sendToServerServiceStub = <SendToServerService>({
    send(c: string) {
      return of(c);
    },
  });

  beforeEach(() => {
    uut = new AppComponent(sendToServerServiceStub);
  });

  it('should have 4 initial colors', () => {
    expect(uut.colors.length).toBe(4);
  });

  it('should call the send method with the given data', () => {
    const sendSpy = spyOn(sendToServerServiceStub, 'send').and.returnValue({ subscribe() {} });
    uut.onAdd('data');

    expect(sendSpy).toHaveBeenCalledWith('data');
  });

  it('should add the given data to the colors array', () => {
    uut.onAdd('green');

    expect(uut.colors.length).toBe(5);
    expect(uut.colors[uut.colors.length - 1]).toBe('green');
  });
});
