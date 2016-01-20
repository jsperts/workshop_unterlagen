function disableDebug($compileProvider) {
  const enableDebugInfo = process.env.NODE_ENV === 'dev';
  $compileProvider.debugInfoEnabled(enableDebugInfo);
}

export default ['$compileProvider', disableDebug];
