import React from 'react';
import MenuItem from './MenuItem'
import MenuTree from './MenuTree';

export default props => (
    <ul className="sidebar-menu" data-widget="tree">
        <MenuItem path="#dashboard" icon="dashboard" label="Dashboard"></MenuItem>
        <MenuTree path="#" icon="edit" label="Cadastro">
            <MenuItem path="#billing-cycles" label="Ciclo de Pagamentos" icon="gbp"></MenuItem>
            <MenuItem></MenuItem>
            <MenuItem></MenuItem>
        </MenuTree>
    </ul>
)