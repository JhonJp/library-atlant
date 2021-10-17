import { Meta, Story } from '@storybook/react'
import { Grid } from '@material-ui/core'
import { Sidebar } from '../../components/Navigation/Sidebar'
import { SidebarItem } from '../../components/Navigation/SidebarItem'

export default {
  title: 'Navigation/Sidebar',
  component: Sidebar
} as Meta

const TextInput: Story<any> = (args) => {
  return (
    <Grid container>
      <Grid item xs={4} md={3}>
        <Sidebar {...args}>
          <SidebarItem navName="Dashboard" openAble={false} />

          <SidebarItem navName="Dashboards" openAble={true} active >
            <ul>
              <li><a href="index.html"><span className="xn-text">Dashboard 1</span></a></li>
              <li><a href="dashboard.html"><span className="xn-text">Dashboard 2</span></a><div className="informer informer-danger">New!</div></li>
              <li><a href="dashboard-dark.html"><span className="xn-text">Dashboard 3</span></a><div className="informer informer-danger">New!</div></li>
            </ul>
          </SidebarItem>

        </Sidebar>
      </Grid>
    </Grid>
  )
}

export const Args = TextInput.bind({})

Args.args = {
  hasLogo: true,
  hasHeadeName: true,
  companyName: 'Atlant',
  companyTagline: 'An atlant base react library.',
  companyLogoURL: '#',
  hasNavigationLabel: true
}