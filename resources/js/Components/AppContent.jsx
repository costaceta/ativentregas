import React, { Suspense } from 'react'
import { CContainer, CSpinner } from '@coreui/react'

const AppContent = ({ children }) => {
  return (
    <CContainer lg>
      <Suspense fallback={<CSpinner color="primary" />}>
        {children}
      </Suspense>
    </CContainer>
  )
}

export default React.memo(AppContent)
