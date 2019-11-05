import Head from 'next/head'
import "../assets/css/index.css"
import "../assets/css/bootstrap.css"

export default class Layout extends React.PureComponent {
  render() {
      const {children} = this.props

    return <div>
      <Head>
        <title>{ "title" }</title>
        <meta name="description" content={ "description" } />
        <meta name="viewport" content="width=device-width, initial-scale=1.0" />
        <link rel="manifest" href="/static/manifest.json" />
        <meta name="theme-color" content="#ff6600" />
        <link rel="shortcut icon" href="/static/icon.png" />
        <link rel="apple-touch-icon" href="/static/icon.png" />
        <meta name="apple-mobile-web-app-title" content="Hacker News" />
        <meta name="apple-mobile-web-app-status-bar-style" content="default" />
        <meta name="apple-mobile-web-app-capable" content="yes" />
        <meta name="mobile-web-app-capable" content="yes" />
      </Head>

      { children }

    </div>
  }
}
