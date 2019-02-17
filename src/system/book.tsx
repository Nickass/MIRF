const book = {
  home: {
    root: () => '/home'
  },
  settings: {
    root: () => '/settings',
    user: () => '/settings/user',
    auth: () => '/settings/user/auth'
  },
  words: {
    root: (id: any = ':id') => '/words/' + id
  }
}

export default book;