const book = {
  home: {
    root: () => '/'
  },
  settings: {
    root: () => '/settings',
    user: () => '/settings/user',
    auth: () => '/settings/user/auth'
  },
  words: {
    root: (id: string | number = ':id') => '/words/' + id
  }
}

export default book;