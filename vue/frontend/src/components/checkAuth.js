export default function (cookies, router) {
  if (!cookies.get('auth')) {
    router.replace({ name: 'index' })
  }
}
