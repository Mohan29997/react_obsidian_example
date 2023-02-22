import { Anotherclass, BarManager } from 'data'
import { Singleton, Graph, ObjectGraph, Provides } from 'react-obsidian'
import FooService from './fooservice'

@Singleton()
@Graph({ subgraphs: [Anotherclass] })
export class ApplicationGraph extends ObjectGraph {
  // fooService requires a barManager so it receives one as a parameter.
  @Provides()
  fooService(barManager: BarManager): FooService {
    console.log('fooService fuc')
    return new FooService(barManager)
  }
}
