import { ExtensionContext, languages, workspace } from 'coc.nvim';

import { BladeHoverProvider } from './hover';

export async function activate(context: ExtensionContext): Promise<void> {
  const extensionConfig = workspace.getConfiguration('bladeSnippets');
  const isEnable = extensionConfig.get<boolean>('enable', true);
  if (!isEnable) return;

  context.subscriptions.push(languages.registerHoverProvider(['blade'], new BladeHoverProvider(context)));
}
