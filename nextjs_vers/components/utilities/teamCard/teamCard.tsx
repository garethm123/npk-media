import React, { FC, useEffect, useRef, useState } from 'react';
import { AnimateSharedLayout, AnimatePresence } from 'framer-motion'
import MembersGrid from './membersGrid/membersGrid';
import MemberPopup from './memberPopup/memberPopup';


interface MembersPageProps {

}

const MembersPage:FC<MembersPageProps> = (props) => {
	const team = props?.members

	const [focusedMember, setFocusedMember] = useState();
	
	const memberClickHandler = (member) => {
		const alreadyActive = focusedMember === member;
		setFocusedMember(alreadyActive ? {} : member);
	};
	

  return (
    <div>
      <AnimateSharedLayout type="crossfade">
				<MembersGrid memberClickHandler={memberClickHandler} focusedMember={focusedMember} team={team}/>
				<AnimatePresence>
					{focusedMember
						? <MemberPopup memberClickHandler={memberClickHandler} focusedMember={focusedMember} key={focusedMember._uid}/>
						: null
					}
				</AnimatePresence>
      </AnimateSharedLayout>
    </div>
  )
}

export default MembersPage