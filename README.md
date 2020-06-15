# vscode-ext-codicons

This module provides objects to work with [codicons](https://microsoft.github.io/vscode-codicons/dist/codicon.html) while developing VS Code extensions.

[Codicons]() where officially released in February 2020 ([publishing notes](https://code.visualstudio.com/updates/v1_42#_extension-authoring)), being now possible to extension developers to reuse them. Prior to that, you only had available support to [GitHub Octicons](https://primer.style/octicons/).

## Installation

`npm install vscode-ext-codicons`

## Usage

```ts
    import { ThemeIcons, codicons } from "vscode-ext-codicons";

    ...

    class BookmarkNode extends vscode.TreeItem {
      ...
      // instead of
      this.iconPath = new ThemeIcon('git-merge');

      // use
      this.iconPath = ThemeIcons.git_merge;
    }

    ...

    // instead of
    statusItem.text = "$(folder) " + folderName; 

    // use
    statusItem.text = codicons.folder + " " + folderName; 
```

## Support

If you find it useful, please consider supporting it.

<table align="center" width="60%" border="0">
  <tr>
    <td>
      <a title="Paypal" href="https://www.paypal.com/cgi-bin/webscr?cmd=_donations&business=EP57F3B6FXKTU&lc=US&item_name=Alessandro%20Fragnani&item_number=vscode%20extensions&currency_code=USD&bn=PP%2dDonationsBF%3abtn_donate_SM%2egif%3aNonHosted"><img src="https://www.paypalobjects.com/en_US/i/btn/btn_donate_SM.gif"/></a>
    </td>
    <td>
      <a title="Paypal" href="https://www.paypal.com/cgi-bin/webscr?cmd=_donations&business=EP57F3B6FXKTU&lc=BR&item_name=Alessandro%20Fragnani&item_number=vscode%20extensions&currency_code=BRL&bn=PP%2dDonationsBF%3abtn_donate_SM%2egif%3aNonHosted"><img src="https://www.paypalobjects.com/pt_BR/i/btn/btn_donate_SM.gif"/></a>
    </td>
    <td>
      <a title="Patreon" href="https://www.patreon.com/alefragnani"><img src="https://raw.githubusercontent.com/alefragnani/oss-resources/master/images/button-become-a-patron-rounded-small.png"/></a>
    </td>
  </tr>
</table>

# License

[MIT](LICENSE.md) &copy; Alessandro Fragnani