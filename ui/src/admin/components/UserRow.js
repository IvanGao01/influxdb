import React, {PropTypes} from 'react'
import MultiSelectDropdown from 'shared/components/MultiSelectDropdown'

const UserRow = ({user: {name, roles, permissions}}) => (
  <tr>
    <td>{name}</td>
    <td>
      {
        roles && roles.length ?
        <MultiSelectDropdown
          items={roles.map((role) => role.name)}
          selectedItems={[]}
          label={'Select Roles'}
          onApply={() => '//TODO'}
        /> : '\u2014'
      }
    </td>
    <td>
      {
        permissions && permissions.length ?
        <MultiSelectDropdown
          items={[]}
          selectedItems={[]}
          label={'Select Permissions'}
          onApply={() => '//TODO'}
        /> : '\u2014'
      }
    </td>
  </tr>
)

const {
  arrayOf,
  shape,
  string,
} = PropTypes

UserRow.propTypes = {
  user: shape({
    name: string,
    roles: arrayOf(shape({
      name: string,
    })),
    permissions: arrayOf(shape({
      name: string,
    })),
  }).isRequired,
}

export default UserRow
