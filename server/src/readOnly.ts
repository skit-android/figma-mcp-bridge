// Must match READ_ONLY_REQUEST_TYPES in plugin/src/main/code.ts.
export const READ_ONLY_REQUEST_TYPES: ReadonlySet<string> = new Set([
  "get_document",
  "get_selection",
  "get_layout_tree",
  "get_node",
  "get_prototype_connections",
  "trace_prototype_flow",
  "get_styles",
  "get_metadata",
  "get_design_context",
  "get_variable_defs",
  "get_screenshot",
  "get_motion_styles",
  "get_node_motion",
  "set_selection",
  "scroll_and_zoom_into_view",
]);

export const READ_ONLY_TOOLS: ReadonlySet<string> = new Set([
  ...READ_ONLY_REQUEST_TYPES,
  "list_files",
  "save_screenshots",
]);
