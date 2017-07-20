import React from 'react'
import ExpansionList from 'react-md/lib/ExpansionPanels/ExpansionList'
import ExpansionPanel from 'react-md/lib/ExpansionPanels/ExpansionPanel'
import Account from './profile/Account'
import AccountHeader from './profile/AccountHeader'
import ProfileCreationStep from '../profile_creation/ProfileCreationStep' 
const Profile = ({panel, profile}) => {
  return (
    <ExpansionList>
      <ExpansionPanel closeOnSave={false} closeOnCancel={false} {...panel} label={<AccountHeader {...profile} />}>
        <Account {...profile} />
      </ExpansionPanel>
      <ExpansionPanel label={`Next step ${profile.accountStep1OK ? '' : 'not'} ready`} >
      	<ProfileCreationStep text="location"  {...profile} camps = {panel.camps} countries={panel.countries}   />
      </ExpansionPanel>
          <ExpansionPanel label={`Next step ${profile.campLocation && profile.campCountry ? '' : 'not'} ready`} >
      	<ProfileCreationStep text="skills" studies = {panel.studies} skills={panel.skills}  />
      </ExpansionPanel>
    </ExpansionList>
  );
}

export default Profile
