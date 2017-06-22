import { inject, fakeAsync, tick, TestBed } from '@angular/core/testing';
import { MockBackend } from '@angular/http/testing';
import { Http, ConnectionBackend, BaseRequestOptions, Response, ResponseOptions } from '@angular/http';
import { UserService } from './user.service';
import { User } from './user.model';

describe('UserService', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [
        UserService,
        BaseRequestOptions,
        MockBackend,
        {
          provide: Http,
          // We also setting up the Http class to use a MockBackend.
          useFactory: (backend: ConnectionBackend,
                       defaultOptions: BaseRequestOptions) => {
            return new Http(backend, defaultOptions);
          }, deps: [MockBackend, BaseRequestOptions]
        }
      ]
    });
  });

  describe('getList', () => {
    it('retrieves a full-list of users', inject([UserService, MockBackend], fakeAsync((svc: UserService, backend: any) => {
        let res: User[];
        backend.connections.subscribe((c: any) => {
          // Comprobamos que la URL sea la correcta.
          expect(c.request.url).toContain('https://jsonplaceholder.typicode.com/users');
          expect(c.request.headers.has('X-API-TOKEN')).toBeTruthy();
          expect(c.request.headers.get('X-API-TOKEN')).toEqual('kubide');
          // Mockeamos la respuesta.
          const response = new ResponseOptions({
            body: USERS_RESPONSE,
            status: 200
          });
          c.mockRespond(new Response(response));
        });
        svc.getList().subscribe((_res: User[]) => {
          res = _res;
        });
        // Como estamos usando fakeAsync nos requiere hacer manualmente el código asíncrono llamando al método tick().
        tick();
        expect(res[0].id).toBe(1);
        expect(res.length).toBe(2);

    })));
  });
});


const USERS_RESPONSE = [
  {
    'id': 1,
    'name': 'Leanne Graham',
    'username': 'Bret',
    'email': 'Sincere@april.biz',
    'address': {
      'street': 'Kulas Light',
      'suite': 'Apt. 556',
      'city': 'Gwenborough',
      'zipcode': '92998-3874',
      'geo': {
        'lat': '-37.3159',
        'lng': '81.1496'
      }
    },
    'phone': '1-770-736-8031 x56442',
    'website': 'hildegard.org',
    'company': {
      'name': 'Romaguera-Crona',
      'catchPhrase': 'Multi-layered client-server neural-net',
      'bs': 'harness real-time e-markets'
    }
  },
  {
    'id': 2,
    'name': 'Ervin Howell',
    'username': 'Antonette',
    'email': 'Shanna@melissa.tv',
    'address': {
      'street': 'Victor Plains',
      'suite': 'Suite 879',
      'city': 'Wisokyburgh',
      'zipcode': '90566-7771',
      'geo': {
        'lat': '-43.9509',
        'lng': '-34.4618'
      }
    },
    'phone': '010-692-6593 x09125',
    'website': 'anastasia.net',
    'company': {
      'name': 'Deckow-Crist',
      'catchPhrase': 'Proactive didactic contingency',
      'bs': 'synergize scalable supply-chains'
    }
  }
];
