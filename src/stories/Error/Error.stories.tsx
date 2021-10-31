import { Meta, Story } from '@storybook/react'
import { Grid } from '@material-ui/core'
import { NotFound } from '../../components/Error/404'

export default {
  title: 'Error/Generic',
  component: NotFound
} as Meta

const TextInput: Story<any> = (args) => {
  return (
    <Grid container>
      <Grid item xs={12} md={12}>
        <NotFound {...args} />
      </Grid>
    </Grid>
  )
}

export const Args = TextInput.bind({})

Args.args = {
  dashboardLink: '#dashboard',
  previousPageLink: '#previous',
  errorCode: '500',
  errorMsg: 'The system encountered an error, please try again later.',
  errorHint: 'INTERNAL SERVER ERROR',
}