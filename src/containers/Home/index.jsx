import * as React from 'react'
import {connect} from 'react-redux'

import {
    fetchUser
} from './actions'
import {
    selectUsers,
    selectSearchId,
    selectErrorMessage,
    selectIsLoading
} from './selectors'

import { User as UserData} from '../../components/User'
import MainContent from '../../components/MainContent'
import GridContainer from '../../components/GridContainer'
import Container from '../../components/Container'
import NavBar from '../../components/NavBar'
import Header from '../../components/Header'
import Loader from '../../components/Loader'




class User extends React.Component {

    componentWillMount() {
        this.props.getUser(this.props.match.params.id)
    }

    renderUser = (pm, index) => {
        const userProps = pm;
        userProps.index = index;
        return (
            <UserData key={index} {...userProps} />
        )
    }

    render() {
        const {
            users,
            errorMessage,
            isLoading
        } = this.props

        return (
            <Container>
                <NavBar>
                    <Header>Users</Header>
                </NavBar>
                {errorMessage && <p>{errorMessage}</p>}
                {isLoading && <Loader />}
                {users &&
                <MainContent>
                    <GridContainer>
                        {users.map((user, index) => this.renderUser(user, index))}
                    </GridContainer>
                </MainContent>
                }
            </Container>
        )
    }
}

const mapStateToProps = (state) => {
    return {
        searchId: selectSearchId(state),
        users: selectUsers(state),
        errorMessage: selectErrorMessage(state),
        isLoading: selectIsLoading(state)
    }
}

function mapDispatchToProps(dispatch) {
    return {
        getUser: (id) => dispatch(fetchUser(id))
    }
}

export default connect(mapStateToProps, mapDispatchToProps)(User)