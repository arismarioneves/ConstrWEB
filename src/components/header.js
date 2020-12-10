import React, { Component } from "react"
import { Link } from "gatsby"
import {
  Container,
  Collapse,
  Navbar,
  NavbarToggler,
  Nav,
  NavItem,
} from "reactstrap"

class Header extends Component {
  constructor(props) {
    super(props)
    this.toggle = this.toggle.bind(this)
    this.state = {
      isOpen: false,
    }
  }
  toggle() {
    this.setState({
      isOpen: !this.state.isOpen,
    })
  }
  render() {
    const { siteTitle, logo } = this.props
    return (
      <div className="header">
        <Navbar color="dark" dark expand="md" className="navbar fixed-top">
          <Container>
            <Link to="/#principal" className="navbar-brand">
              <img
                src={logo}
                alt={`${siteTitle} Logo`}
                height="40px"
                className="mr-2"
              />
              {siteTitle}
            </Link>
            <NavbarToggler onClick={this.toggle} />
            <Collapse isOpen={this.state.isOpen} navbar>
              <Nav className="ml-auto" navbar>
                <NavItem>
                  <Link
                    className="nav-link"
                    activeStyle={{ fontWeight: "bold" }}
                    to="/#principal"
                  >
                    Principal
                  </Link>
                </NavItem>
                <NavItem>
                    <Link className="nav-link"
                    to="/projects/#project"
                    activeStyle={{ fontWeight: "bold" }}
				  >
                    Projetos
                  </Link>
                </NavItem>
                <NavItem>
                  <Link
                    className="nav-link"
                    activeStyle={{ fontWeight: "bold" }}
                    to="/services/#services"
                  >
                    Serviços
                  </Link>
                </NavItem>
                <NavItem>
                  <Link
                    className="nav-link"
                    activeStyle={{ fontWeight: "bold" }}
                    to="/about/#about"
                  >
                    Sobre
                  </Link>
                </NavItem>
                <NavItem>
                  <Link
                    className="nav-link"
                    activeStyle={{ fontWeight: "bold" }}
                    to="/contact/#contact"
                  >
                    Contato
                  </Link>
                </NavItem>
              </Nav>
            </Collapse>
          </Container>
        </Navbar>
      </div>
    )
  }
}

export default Header
