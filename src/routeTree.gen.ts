/* prettier-ignore-start */

/* eslint-disable */

// @ts-nocheck

// noinspection JSUnusedGlobalSymbols

// This file is auto-generated by TanStack Router

import { createFileRoute } from '@tanstack/react-router'

// Import Routes

import { Route as rootRoute } from './routes/__root'
import { Route as NorskImport } from './routes/norsk'
import { Route as IndexImport } from './routes/index'

// Create Virtual Routes

const EnglishLazyImport = createFileRoute('/english')()

// Create/Update Routes

const EnglishLazyRoute = EnglishLazyImport.update({
  path: '/english',
  getParentRoute: () => rootRoute,
} as any).lazy(() => import('./routes/english.lazy').then((d) => d.Route))

const NorskRoute = NorskImport.update({
  path: '/norsk',
  getParentRoute: () => rootRoute,
} as any)

const IndexRoute = IndexImport.update({
  path: '/',
  getParentRoute: () => rootRoute,
} as any)

// Populate the FileRoutesByPath interface

declare module '@tanstack/react-router' {
  interface FileRoutesByPath {
    '/': {
      preLoaderRoute: typeof IndexImport
      parentRoute: typeof rootRoute
    }
    '/norsk': {
      preLoaderRoute: typeof NorskImport
      parentRoute: typeof rootRoute
    }
    '/english': {
      preLoaderRoute: typeof EnglishLazyImport
      parentRoute: typeof rootRoute
    }
  }
}

// Create and export the route tree

export const routeTree = rootRoute.addChildren([
  IndexRoute,
  NorskRoute,
  EnglishLazyRoute,
])

/* prettier-ignore-end */
