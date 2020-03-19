import styled from 'styled-components'

const SocialIconContainer = styled.div`
  width: auto;
  height: auto;
`

const SocialIcon = styled.img`
  width: auto;
  height: 32px;
  margin: 1rem 1rem .5rem 0;
  cursor: pointer;
`

const SocialIcons = () => {
  return (
    <SocialIconContainer>
      <a href='https://www.linkedin.com/in/humza-mujib-b14361165/' target='_blank'><SocialIcon src='/linkedin-icon.png' /></a>
      <a href='https://github.com/hmujib' target='_blank'><SocialIcon src='/github-icon.png' /></a>
    </SocialIconContainer>
  )
}

export default SocialIcons