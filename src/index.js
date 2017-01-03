import React from 'react'
import { render } from 'react-dom'
import { Router, Route, IndexRoute, Link, browserHistory } from 'react-router'
import Scrollchor from 'react-scrollchor'

import './foundation.css'
import './index.css'

const ScrollLink = ({ children, to = '', updateRoute = true, path = '/' }) => {
  const pathname = window.location.pathname
  const shouldUpdateRoute = updateRoute =>
    updateRoute ? browserHistory.push(path + '#' + to) : null

  if (pathname !== path) return (
    <a href={ to ? path + '#' + to : path }>
      { children }
    </a>
  )
  return (
    <Scrollchor
      to={ to }
      animate={{ offset: -72 }}
      afterAnimate= { shouldUpdateRoute }>
      { children }
    </Scrollchor>
  )
}

const Navbar = () => {
  return (
    <ul className="menu navbar">
      <li>
        <ScrollLink>
          <button className="button success">
            Home
          </button>
        </ScrollLink>
      </li>
      <li>
        <ScrollLink to="about">
          <button className="button alert">
          About
          </button>
        </ScrollLink>
      </li>
      <li>
        <ScrollLink to="getting-started">
          <button className="button warning">
            Getting Started
            </button>
        </ScrollLink>
      </li>
      <li>
        <Link to="/charts">
          <button className="button secondary">
            Charts
          </button>
        </Link>
      </li>
    </ul>
  )
}

const Home = () => {
  return (
    <div className="main">
      <Navbar />
      <h2 id="home">This is the homepage</h2>
      <p>
        Duis vel condimentum elit. Fusce diam erat, venenatis non erat et, sodales pretium neque. Aliquam efficitur felis ipsum, eget pulvinar eros commodo eget. Praesent turpis risus, hendrerit sit amet diam at, dignissim consectetur purus. Nulla velit nibh, pharetra id massa quis, luctus consequat lectus. Vestibulum scelerisque, mi non lacinia ullamcorper, eros elit egestas massa, vitae commodo enim neque fringilla tortor. Sed varius sit amet lacus in suscipit. Sed sed est enim. Aenean vel nunc porttitor, vehicula dolor eget, posuere nulla. Aenean id est neque. Duis ut semper libero, et convallis nisi. Fusce est diam, convallis a facilisis luctus, accumsan non orci. Etiam at vehicula nunc. Praesent pharetra nulla id dui maximus, eu accumsan eros auctor.
      </p>
      <p>
        Aliquam venenatis augue a nisi volutpat blandit vitae in nisl. Phasellus faucibus, magna vel pellentesque consequat, felis sem luctus lorem, et fringilla velit velit in felis. In hac habitasse platea dictumst. Aliquam molestie, nulla commodo viverra scelerisque, dolor massa vulputate nibh, eu hendrerit nunc nisl ac lectus. Sed ac enim gravida, consequat magna tincidunt, lobortis leo. Mauris viverra purus eu metus convallis, sed pharetra velit pellentesque. Praesent tincidunt lorem nunc, ut lobortis metus pulvinar sit amet. Phasellus elementum eu ligula a mollis.
      </p>
      <p>
        Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nulla blandit tellus a aliquam luctus. Sed a rutrum risus, a interdum lorem. Nullam consectetur dapibus lectus sit amet posuere. In eros sapien, mollis at volutpat tempor, fermentum pulvinar lectus. Etiam rhoncus diam eu nunc eleifend maximus. Integer at aliquet velit. Duis ipsum tellus, volutpat eu congue eget, pretium ac enim. Phasellus sed metus vehicula, congue dolor vel, vehicula leo. Cum sociis natoque penatibus et magnis dis parturient montes, nascetur ridiculus mus.
      </p>
      <p>
        Nullam gravida, nulla non tincidunt volutpat, velit arcu aliquet eros, quis imperdiet ex ligula non quam. Nam non tellus eget lacus rhoncus congue. Aenean commodo lorem blandit volutpat commodo. Morbi accumsan, velit a interdum placerat, quam tellus maximus nisl, vel blandit dui ipsum quis tellus. Donec accumsan sapien vel accumsan fringilla. Maecenas quis tortor suscipit sem pulvinar ornare. Aliquam eu purus sollicitudin, posuere nisi ac, tincidunt dolor. Nunc nisl neque, tincidunt iaculis consectetur elementum, gravida in dui. Sed quis metus tellus. Pellentesque ut neque libero.
      </p>
      <p>
        Sed velit nisl, suscipit blandit orci nec, volutpat scelerisque ipsum. Vivamus ac turpis nec nibh vulputate dignissim. Vestibulum ante ipsum primis in faucibus orci luctus et ultrices posuere cubilia Curae; Nullam consectetur velit eu ligula gravida viverra. Nunc mauris lacus, tincidunt pharetra vehicula id, viverra in libero. Sed accumsan lacinia rutrum. Donec quis cursus justo. Proin sit amet tortor gravida, semper nisi at, mollis felis. Proin justo eros, ultrices ut sapien eu, interdum tempus ligula. Nunc consequat faucibus suscipit.
      </p>
      <h2 id="about">About Us</h2>
      <p>
        Proin vitae nunc quis neque mollis fringilla. Proin ac lacus et lorem tempor viverra. Donec condimentum rutrum libero sed molestie. Etiam condimentum diam nec fringilla dignissim. Proin vel aliquet mauris. Vivamus nec rhoncus eros. Morbi hendrerit congue rutrum. Nunc sodales maximus purus, nec laoreet augue mattis at. Nam condimentum pulvinar velit, et ultrices elit congue ac.
      </p>
      <p>
        Praesent lacinia eros nisi, et egestas ipsum ultrices eu. Mauris bibendum hendrerit lorem, sit amet luctus nibh ullamcorper a. Aliquam viverra arcu ut dolor hendrerit vulputate. Quisque sit amet condimentum nisi, nec aliquam nulla. Duis magna velit, blandit at bibendum in, suscipit et odio. Vivamus risus felis, dictum quis augue et, cursus condimentum odio. Cras vehicula mollis rhoncus. Nam rhoncus pharetra volutpat. Vivamus eu elit vulputate, fringilla nulla quis, aliquam nibh. Pellentesque at mauris et orci fringilla imperdiet sed eu felis. Aenean facilisis, mauris eget pharetra commodo, sem sem malesuada diam, sed dictum turpis velit eget ante. Vivamus et sagittis orci. Duis scelerisque, felis et pretium aliquam, sem nulla dignissim eros, sed semper enim dui eget enim. Mauris efficitur interdum feugiat.
      </p>
      <p>
        Aenean rutrum congue dui in porta. Proin elit lectus, venenatis a pharetra eu, tristique vel mi. Nunc ullamcorper pharetra nibh non interdum. Integer facilisis eros neque, quis eleifend mauris tempor commodo. Proin rhoncus tincidunt mauris a congue. Duis mollis metus at leo egestas, id porta ante convallis. In quis pretium leo, et vehicula sapien. Aenean non leo sit amet augue convallis feugiat at vel massa. Etiam quis placerat nisl, vitae venenatis erat. Nulla libero dolor, facilisis sed ullamcorper vitae, suscipit sit amet metus.
      </p>
      <p>
        Aliquam venenatis augue a nisi volutpat blandit vitae in nisl. Phasellus faucibus, magna vel pellentesque consequat, felis sem luctus lorem, et fringilla velit velit in felis. In hac habitasse platea dictumst. Aliquam molestie, nulla commodo viverra scelerisque, dolor massa vulputate nibh, eu hendrerit nunc nisl ac lectus. Sed ac enim gravida, consequat magna tincidunt, lobortis leo. Mauris viverra purus eu metus convallis, sed pharetra velit pellentesque. Praesent tincidunt lorem nunc, ut lobortis metus pulvinar sit amet. Phasellus elementum eu ligula a mollis.
      </p>
      <p>
        Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nulla blandit tellus a aliquam luctus. Sed a rutrum risus, a interdum lorem. Nullam consectetur dapibus lectus sit amet posuere. In eros sapien, mollis at volutpat tempor, fermentum pulvinar lectus. Etiam rhoncus diam eu nunc eleifend maximus. Integer at aliquet velit. Duis ipsum tellus, volutpat eu congue eget, pretium ac enim. Phasellus sed metus vehicula, congue dolor vel, vehicula leo. Cum sociis natoque penatibus et magnis dis parturient montes, nascetur ridiculus mus.
      </p>
      <h2 id="getting-started">How To Get Started</h2>
      <p>
        Vestibulum rhoncus velit in accumsan scelerisque. Maecenas suscipit tellus neque. Ut in dolor pretium tellus aliquam rhoncus a ac libero. Nullam maximus fringilla facilisis. Cras turpis turpis, iaculis eu vulputate at, lobortis quis arcu. Donec blandit nulla a ipsum tempus condimentum. Praesent ullamcorper erat a massa rutrum, eget gravida eros egestas. Suspendisse feugiat et sem vel dignissim. Etiam a dignissim eros. Quisque fermentum urna at arcu vestibulum maximus. Donec porttitor diam a nisi dignissim finibus. Vivamus ultricies, massa at pharetra fermentum, nisl enim auctor mi, at scelerisque lorem est nec elit. Etiam id ligula molestie, venenatis est quis, maximus ante. Cras sed ante at sapien hendrerit laoreet. Sed at ante at tortor tincidunt lacinia. Pellentesque ullamcorper eros ante, non consectetur libero dapibus sed.
      </p>
      <p>
        Phasellus lacus enim, gravida vehicula risus sit amet, venenatis condimentum urna. Donec non urna iaculis, tempus orci vel, aliquet lacus. Nullam vehicula vestibulum felis, a volutpat lacus vehicula in. Nulla accumsan massa a sapien sollicitudin, tempor porta dolor sollicitudin. Cras in lacus vitae lectus tincidunt molestie sit amet eget ligula. Phasellus ornare elementum congue. Praesent vestibulum sem vitae magna iaculis, eget placerat nisi dignissim. Nulla non facilisis lorem. Duis commodo ipsum a sapien condimentum porttitor.
      </p>
      <p>
        Pellentesque habitant morbi tristique senectus et netus et malesuada fames ac turpis egestas. Ut volutpat interdum eros. Sed vitae felis blandit, eleifend magna id, vehicula tortor. Maecenas in nisi vitae nulla pretium molestie vel et dolor. Fusce ornare tellus vitae purus condimentum, ac cursus ipsum fermentum. Donec et eros tempus, eleifend ex id, dapibus diam. Vestibulum aliquet est a quam cursus vulputate. Curabitur sodales erat eu ante rutrum, ac tristique dui volutpat. Vestibulum efficitur tincidunt tempus. Nullam convallis erat nisi, vitae tincidunt quam accumsan quis.
      </p>
      <p>
        Aliquam venenatis augue a nisi volutpat blandit vitae in nisl. Phasellus faucibus, magna vel pellentesque consequat, felis sem luctus lorem, et fringilla velit velit in felis. In hac habitasse platea dictumst. Aliquam molestie, nulla commodo viverra scelerisque, dolor massa vulputate nibh, eu hendrerit nunc nisl ac lectus. Sed ac enim gravida, consequat magna tincidunt, lobortis leo. Mauris viverra purus eu metus convallis, sed pharetra velit pellentesque. Praesent tincidunt lorem nunc, ut lobortis metus pulvinar sit amet. Phasellus elementum eu ligula a mollis.
      </p>
      <p>
        Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nulla blandit tellus a aliquam luctus. Sed a rutrum risus, a interdum lorem. Nullam consectetur dapibus lectus sit amet posuere. In eros sapien, mollis at volutpat tempor, fermentum pulvinar lectus. Etiam rhoncus diam eu nunc eleifend maximus. Integer at aliquet velit. Duis ipsum tellus, volutpat eu congue eget, pretium ac enim. Phasellus sed metus vehicula, congue dolor vel, vehicula leo. Cum sociis natoque penatibus et magnis dis parturient montes, nascetur ridiculus mus.
      </p>
      <p>
        Aliquam venenatis augue a nisi volutpat blandit vitae in nisl. Phasellus faucibus, magna vel pellentesque consequat, felis sem luctus lorem, et fringilla velit velit in felis. In hac habitasse platea dictumst. Aliquam molestie, nulla commodo viverra scelerisque, dolor massa vulputate nibh, eu hendrerit nunc nisl ac lectus. Sed ac enim gravida, consequat magna tincidunt, lobortis leo. Mauris viverra purus eu metus convallis, sed pharetra velit pellentesque. Praesent tincidunt lorem nunc, ut lobortis metus pulvinar sit amet. Phasellus elementum eu ligula a mollis.
      </p>
      <p>
        Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nulla blandit tellus a aliquam luctus. Sed a rutrum risus, a interdum lorem. Nullam consectetur dapibus lectus sit amet posuere. In eros sapien, mollis at volutpat tempor, fermentum pulvinar lectus. Etiam rhoncus diam eu nunc eleifend maximus. Integer at aliquet velit. Duis ipsum tellus, volutpat eu congue eget, pretium ac enim. Phasellus sed metus vehicula, congue dolor vel, vehicula leo. Cum sociis natoque penatibus et magnis dis parturient montes, nascetur ridiculus mus.
      </p>
      <p>
        Aliquam venenatis augue a nisi volutpat blandit vitae in nisl. Phasellus faucibus, magna vel pellentesque consequat, felis sem luctus lorem, et fringilla velit velit in felis. In hac habitasse platea dictumst. Aliquam molestie, nulla commodo viverra scelerisque, dolor massa vulputate nibh, eu hendrerit nunc nisl ac lectus. Sed ac enim gravida, consequat magna tincidunt, lobortis leo. Mauris viverra purus eu metus convallis, sed pharetra velit pellentesque. Praesent tincidunt lorem nunc, ut lobortis metus pulvinar sit amet. Phasellus elementum eu ligula a mollis.
      </p>
      <p>
        Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nulla blandit tellus a aliquam luctus. Sed a rutrum risus, a interdum lorem. Nullam consectetur dapibus lectus sit amet posuere. In eros sapien, mollis at volutpat tempor, fermentum pulvinar lectus. Etiam rhoncus diam eu nunc eleifend maximus. Integer at aliquet velit. Duis ipsum tellus, volutpat eu congue eget, pretium ac enim. Phasellus sed metus vehicula, congue dolor vel, vehicula leo. Cum sociis natoque penatibus et magnis dis parturient montes, nascetur ridiculus mus.
      </p>
    </div>
  )
}

const Charts = ({ children }) => {
  return (
    <div className="main">
      <Navbar />
      <div>
        <ul className="menu">
          <li>
            <button className="button primary">
              <Link to="/charts/logs">Logs inputs</Link>
            </button>
          </li>
          <li>
            <button className="button primary">
              <Link to="/charts/players">Player selection</Link>
            </button> 
          </li>
          <li>
            <button className="button primary">
              <Link to="/charts/">Charts</Link>
            </button> 
          </li>
        </ul>
        { children }
      </div>
    </div>
  )
}

const Logs = () => {
  return <input type="text" placeholder="logs.tf/12345" />
}

const Players = () => {
  return <h3>This is a table</h3>
}

const ChartsIndex = () => {
  return <h3>This is the chart index</h3>
}

const Redirect = ({ to }) => {
  browserHistory.push(to)
  return null
}

render(
  <Router history={browserHistory}>
    <Route path="/" component={ Home } />
    <Route path="charts" component={ Charts }>
      <IndexRoute component={ ChartsIndex } />
      <Route path="logs" component={ Logs } />
      <Route path="players" component={ Players } />
      <Route path="*" component={ () => <Redirect to="/charts" /> } />
    </Route>
  </Router>,
  document.getElementById('root')
)
