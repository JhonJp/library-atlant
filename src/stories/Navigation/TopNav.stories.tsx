import { Meta, Story } from '@storybook/react'
import { Grid } from '@material-ui/core'
import { TopNav } from '../../components/Navigation/TopNav'

export default {
  title: 'Navigation/Top Nav',
  component: TopNav
} as Meta

const TextInput: Story<any> = (args) => {
  return (
    <Grid container>
      <Grid item xs={12} md={12}>
        <TopNav {...args} />
      </Grid>
    </Grid>
  )
}

export const Args = TextInput.bind({})

Args.args = {
  hasSearch: true,
  hasMgs: true,
  messageCount: 4,
  messageURL: '#',
  signOut: () => console.log('signOut')
}