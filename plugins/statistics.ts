import {
  Connection,
  Counter,
  HitCounter,
  WordWeb
} from 'micro-stat'

export default defineNuxtPlugin(nuxtApp => {
  const options = {
    disablePublication: process.env.NODE_ENV === 'development'
  }

  Connection.connect('64798596-7725-4607-9c12-e4bf270a2f4a', options)

  const statistics = {
    Counter,
    HitCounter,
    WordWeb
  }

  const myCounter = new HitCounter('Frontend Loaded')
  myCounter.publish()

  // now available on `nuxtApp.$injected`
  nuxtApp.provide('statistics', () => statistics)
})