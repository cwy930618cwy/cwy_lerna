export interface appInterface {
  app: {
    sidebar: {
      opened: Boolean;
      withoutAnimation: Boolean;
    };
    device: String;
  };
}

export interface tagsViewInterface {
  tagsView: {
    visitedViews: [];
    cachedViews: [];
  };
}

export interface userInterface {
  user: {
    token: String;
    name: String;
    avatar: String;
    introduction: String;
    roles: [];
  };
}

export interface permissionInterface {
  permission: {
    routes: [];
    addRoutes: [];
  };
}

export interface errorLogInterface {
  errorLog: {
    logs: [];
  };
}
