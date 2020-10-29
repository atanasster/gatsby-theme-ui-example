/** @jsx jsx */
import { FC } from 'react'
import { jsx, Box, Container } from 'theme-ui'

 const Layout: FC = props => (
  <Box>
    <Box as="header">
      <h2>Theme UI Gatsby Example</h2>
      <h3 sx={{
        bg: 'secondary'
      }}>SX prop</h3>
    </Box>
    <Box as="main">
      <Container>{props.children}</Container>
    </Box>
  </Box>
)
export default Layout;