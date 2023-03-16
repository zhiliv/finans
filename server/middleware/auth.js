import { getServerSession, getToken  } from '#auth'
// import moment from 'moment';

export default defineEventHandler(async (event) => {
  // console.log('New request: ' + event.node.req.url)
  // const session = await getServerSession(event)

  /* let now = new Date()
  console.log('Получение сессии', session)
  if(session)
  console.log('moment', moment().format(session.expires))
  console.log('mnt', now)
  const token = await getToken({ event })
  console.log('🚀 -> defineEventHandler -> token:', token) */

  /* if(!session)
  return {status: 403} */
  // console.log(event)
/*   if(event.node.req.originalUrl !== '/api/auth/signin' && event.node.req.originalUrl.indexOf('callback') === -1 && !session){
    return sendRedirect(event, '/api/auth/signin', 302)
  } */


})

