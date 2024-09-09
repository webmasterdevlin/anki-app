/* prettier-ignore-start */

/* eslint-disable */

// @ts-nocheck

// noinspection JSUnusedGlobalSymbols

// This file is auto-generated by TanStack Router

import { createFileRoute } from '@tanstack/react-router'

// Import Routes

import { Route as rootRoute } from './routes/__root'
import { Route as SpanishImport } from './routes/spanish'
import { Route as EnglishImport } from './routes/english'
import { Route as IndexImport } from './routes/index'

// Create Virtual Routes

const NorskLazyImport = createFileRoute('/norsk')()

// Create/Update Routes

const NorskLazyRoute = NorskLazyImport.update({
  path: '/norsk',
  getParentRoute: () => rootRoute,
} as any).lazy(() => import('./routes/norsk.lazy').then((d) => d.Route))

const SpanishRoute = SpanishImport.update({
  path: '/spanish',
  getParentRoute: () => rootRoute,
} as any)

const EnglishRoute = EnglishImport.update({
  path: '/english',
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
      id: '/'
      path: '/'
      fullPath: '/'
      preLoaderRoute: typeof IndexImport
      parentRoute: typeof rootRoute
    }
    '/english': {
      id: '/english'
      path: '/english'
      fullPath: '/english'
      preLoaderRoute: typeof EnglishImport
      parentRoute: typeof rootRoute
    }
    '/spanish': {
      id: '/spanish'
      path: '/spanish'
      fullPath: '/spanish'
      preLoaderRoute: typeof SpanishImport
      parentRoute: typeof rootRoute
    }
    '/norsk': {
      id: '/norsk'
      path: '/norsk'
      fullPath: '/norsk'
      preLoaderRoute: typeof NorskLazyImport
      parentRoute: typeof rootRoute
    }
  }
}

// Create and export the route tree

export interface FileRoutesByFullPath {
  '/': typeof IndexRoute
  '/english': typeof EnglishRoute
  '/spanish': typeof SpanishRoute
  '/norsk': typeof NorskLazyRoute
}

export interface FileRoutesByTo {
  '/': typeof IndexRoute
  '/english': typeof EnglishRoute
  '/spanish': typeof SpanishRoute
  '/norsk': typeof NorskLazyRoute
}

export interface FileRoutesById {
  __root__: typeof rootRoute
  '/': typeof IndexRoute
  '/english': typeof EnglishRoute
  '/spanish': typeof SpanishRoute
  '/norsk': typeof NorskLazyRoute
}

export interface FileRouteTypes {
  fileRoutesByFullPath: FileRoutesByFullPath
  fullPaths: '/' | '/english' | '/spanish' | '/norsk'
  fileRoutesByTo: FileRoutesByTo
  to: '/' | '/english' | '/spanish' | '/norsk'
  id: '__root__' | '/' | '/english' | '/spanish' | '/norsk'
  fileRoutesById: FileRoutesById
}

export interface RootRouteChildren {
  IndexRoute: typeof IndexRoute
  EnglishRoute: typeof EnglishRoute
  SpanishRoute: typeof SpanishRoute
  NorskLazyRoute: typeof NorskLazyRoute
}

const rootRouteChildren: RootRouteChildren = {
  IndexRoute: IndexRoute,
  EnglishRoute: EnglishRoute,
  SpanishRoute: SpanishRoute,
  NorskLazyRoute: NorskLazyRoute,
}

export const routeTree = rootRoute
  ._addFileChildren(rootRouteChildren)
  ._addFileTypes<FileRouteTypes>()

/* prettier-ignore-end */

/* ROUTE_MANIFEST_START
{
  "routes": {
    "__root__": {
      "filePath": "__root.tsx",
      "children": [
        "/",
        "/english",
        "/spanish",
        "/norsk"
      ]
    },
    "/": {
      "filePath": "index.tsx"
    },
    "/english": {
      "filePath": "english.tsx"
    },
    "/spanish": {
      "filePath": "spanish.tsx"
    },
    "/norsk": {
      "filePath": "norsk.lazy.tsx"
    }
  }
}
ROUTE_MANIFEST_END */
