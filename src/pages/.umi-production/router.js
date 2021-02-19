import React from 'react';
import {
  Router as DefaultRouter,
  Route,
  Switch,
  StaticRouter,
} from 'react-router-dom';
import dynamic from 'umi/dynamic';
import renderRoutes from 'umi/lib/renderRoutes';
import history from '@@/history';
import RendererWrapper0 from 'C:/Users/Administrator/PycharmProjects/artipub/src/pages/.umi-production/LocaleWrapper.jsx';
import _dvaDynamic from 'dva/dynamic';

const Router = require('dva/router').routerRedux.ConnectedRouter;

const routes = [
  {
    path: '/articles/edit/:id',
    name: 'article-edit',
    authority: ['admin', 'user'],
    icon: 'read',
    hideInMenu: true,
    component: __IS_BROWSER
      ? _dvaDynamic({
          component: () =>
            import(/* webpackChunkName: "p__ArticleEdit__ArticleEdit" */ '../ArticleEdit/ArticleEdit'),
          LoadingComponent: require('C:/Users/Administrator/PycharmProjects/artipub/src/components/PageLoading/index')
            .default,
        })
      : require('../ArticleEdit/ArticleEdit').default,
    exact: true,
  },
  {
    path: '/articles/new',
    name: 'article-new',
    authority: ['admin', 'user'],
    icon: 'read',
    hideInMenu: true,
    component: __IS_BROWSER
      ? _dvaDynamic({
          component: () =>
            import(/* webpackChunkName: "p__ArticleEdit__ArticleEdit" */ '../ArticleEdit/ArticleEdit'),
          LoadingComponent: require('C:/Users/Administrator/PycharmProjects/artipub/src/components/PageLoading/index')
            .default,
        })
      : require('../ArticleEdit/ArticleEdit').default,
    exact: true,
  },
  {
    path: '/paste',
    name: 'paste',
    authority: ['admin', 'user'],
    icon: 'read',
    hideInMenu: true,
    component: __IS_BROWSER
      ? _dvaDynamic({
          component: () =>
            import(/* webpackChunkName: "p__Paste__Paste" */ '../Paste/Paste'),
          LoadingComponent: require('C:/Users/Administrator/PycharmProjects/artipub/src/components/PageLoading/index')
            .default,
        })
      : require('../Paste/Paste').default,
    exact: true,
  },
  {
    path: '/demo',
    name: 'demo',
    authority: ['admin', 'user'],
    icon: 'read',
    hideInMenu: true,
    component: __IS_BROWSER
      ? _dvaDynamic({
          component: () =>
            import(/* webpackChunkName: "p__Demo__Demo" */ '../Demo/Demo'),
          LoadingComponent: require('C:/Users/Administrator/PycharmProjects/artipub/src/components/PageLoading/index')
            .default,
        })
      : require('../Demo/Demo').default,
    exact: true,
  },
  {
    path: '/',
    component: __IS_BROWSER
      ? _dvaDynamic({
          component: () =>
            import(/* webpackChunkName: "layouts__BasicLayout" */ '../../layouts/BasicLayout'),
          LoadingComponent: require('C:/Users/Administrator/PycharmProjects/artipub/src/components/PageLoading/index')
            .default,
        })
      : require('../../layouts/BasicLayout').default,
    Routes: [require('../Authorized').default],
    authority: ['admin', 'user'],
    routes: [
      {
        path: '/',
        redirect: '/platforms',
        exact: true,
      },
      {
        path: '/platforms',
        name: 'platforms',
        icon: 'cloud',
        component: __IS_BROWSER
          ? _dvaDynamic({
              component: () =>
                import(/* webpackChunkName: "p__PlatformList__PlatformList" */ '../PlatformList/PlatformList'),
              LoadingComponent: require('C:/Users/Administrator/PycharmProjects/artipub/src/components/PageLoading/index')
                .default,
            })
          : require('../PlatformList/PlatformList').default,
        exact: true,
      },
      {
        path: '/articles',
        name: 'articles',
        icon: 'read',
        component: __IS_BROWSER
          ? _dvaDynamic({
              component: () =>
                import(/* webpackChunkName: "p__ArticleList__ArticleList" */ '../ArticleList/ArticleList'),
              LoadingComponent: require('C:/Users/Administrator/PycharmProjects/artipub/src/components/PageLoading/index')
                .default,
            })
          : require('../ArticleList/ArticleList').default,
        exact: true,
      },
      {
        path: '/helper',
        name: 'helper',
        icon: 'key',
        component: __IS_BROWSER
          ? _dvaDynamic({
              component: () =>
                import(/* webpackChunkName: "p__Helper__Helper" */ '../Helper/Helper'),
              LoadingComponent: require('C:/Users/Administrator/PycharmProjects/artipub/src/components/PageLoading/index')
                .default,
            })
          : require('../Helper/Helper').default,
        exact: true,
      },
      {
        path: '/environments',
        name: 'environments',
        icon: 'setting',
        component: __IS_BROWSER
          ? _dvaDynamic({
              component: () =>
                import(/* webpackChunkName: "p__Environment__EnvironmentList" */ '../Environment/EnvironmentList'),
              LoadingComponent: require('C:/Users/Administrator/PycharmProjects/artipub/src/components/PageLoading/index')
                .default,
            })
          : require('../Environment/EnvironmentList').default,
        exact: true,
      },
      {
        component: __IS_BROWSER
          ? _dvaDynamic({
              component: () =>
                import(/* webpackChunkName: "p__404" */ '../404'),
              LoadingComponent: require('C:/Users/Administrator/PycharmProjects/artipub/src/components/PageLoading/index')
                .default,
            })
          : require('../404').default,
        exact: true,
      },
    ],
  },
  {
    component: __IS_BROWSER
      ? _dvaDynamic({
          component: () => import(/* webpackChunkName: "p__404" */ '../404'),
          LoadingComponent: require('C:/Users/Administrator/PycharmProjects/artipub/src/components/PageLoading/index')
            .default,
        })
      : require('../404').default,
    exact: true,
  },
];
window.g_routes = routes;
const plugins = require('umi/_runtimePlugin');
plugins.applyForEach('patchRoutes', { initialValue: routes });

export { routes };

export default class RouterWrapper extends React.Component {
  unListen() {}

  constructor(props) {
    super(props);

    // route change handler
    function routeChangeHandler(location, action) {
      plugins.applyForEach('onRouteChange', {
        initialValue: {
          routes,
          location,
          action,
        },
      });
    }
    this.unListen = history.listen(routeChangeHandler);
    // dva 中 history.listen 会初始执行一次
    // 这里排除掉 dva 的场景，可以避免 onRouteChange 在启用 dva 后的初始加载时被多执行一次
    const isDva =
      history.listen
        .toString()
        .indexOf('callback(history.location, history.action)') > -1;
    if (!isDva) {
      routeChangeHandler(history.location);
    }
  }

  componentWillUnmount() {
    this.unListen();
  }

  render() {
    const props = this.props || {};
    return (
      <RendererWrapper0>
        <Router history={history}>{renderRoutes(routes, props)}</Router>
      </RendererWrapper0>
    );
  }
}
