/*---------------------------------------------------------------------------------------------
*  Copyright (c) Alessandro Fragnani. All rights reserved.
*  Licensed under the MIT License. See License.md in the project root for license information.
*--------------------------------------------------------------------------------------------*/

import { ThemeIcon } from "vscode";

const ThemeIcons = {
    account: new ThemeIcon('account'),
    activate_breakpoints: new ThemeIcon('activate-breakpoints'),
    add: new ThemeIcon('add'),
    archive: new ThemeIcon('archive'),
    arrow_both: new ThemeIcon('arrow-both'),
    arrow_down: new ThemeIcon('arrow-down'),
    arrow_left: new ThemeIcon('arrow-left'),
    arrow_right: new ThemeIcon('arrow-right'),
    arrow_small_down: new ThemeIcon('arrow-small-down'),
    arrow_small_left: new ThemeIcon('arrow-small-left'),
    arrow_small_right: new ThemeIcon('arrow-small-right'),
    arrow_small_up: new ThemeIcon('arrow-small-up'),
    arrow_up: new ThemeIcon('arrow-up'),
    beaker: new ThemeIcon('beaker'),
    bell_dot: new ThemeIcon('bell-dot'),
    bell: new ThemeIcon('bell'),
    bold: new ThemeIcon('bold'),
    book: new ThemeIcon('book'),
    bookmark: new ThemeIcon('bookmark'),
    briefcase: new ThemeIcon('briefcase'),
    broadcast: new ThemeIcon('broadcast'),
    browser: new ThemeIcon('browser'),
    bug: new ThemeIcon('bug'),
    calendar: new ThemeIcon('calendar'),
    call_incoming: new ThemeIcon('call-incoming'),
    call_outgoing: new ThemeIcon('call-outgoing'),
    case_sensitive: new ThemeIcon('case-sensitive'),
    check: new ThemeIcon('check'),
    checklist: new ThemeIcon('checklist'),
    chevron_down: new ThemeIcon('chevron-down'),
    chevron_left: new ThemeIcon('chevron-left'),
    chevron_right: new ThemeIcon('chevron-right'),
    chevron_up: new ThemeIcon('chevron-up'),
    chrome_close: new ThemeIcon('chrome-close'),
    chrome_maximize: new ThemeIcon('chrome-maximize'),
    chrome_minimize: new ThemeIcon('chrome-minimize'),
    chrome_restore: new ThemeIcon('chrome-restore'),
    circle_filled: new ThemeIcon('circle-filled'),
    circle_outline: new ThemeIcon('circle-outline'),
    circle_slash: new ThemeIcon('circle-slash'),
    circuit_board: new ThemeIcon('circuit-board'),
    clear_all: new ThemeIcon('clear-all'),
    clippy: new ThemeIcon('clippy'),
    close_all: new ThemeIcon('close-all'),
    close: new ThemeIcon('close'),
    cloud_download: new ThemeIcon('cloud-download'),
    cloud_upload: new ThemeIcon('cloud-upload'),
    code: new ThemeIcon('code'),
    collapse_all: new ThemeIcon('collapse-all'),
    color_mode: new ThemeIcon('color-mode'),
    comment_discussion: new ThemeIcon('comment-discussion'),
    comment: new ThemeIcon('comment'),
    credit_card: new ThemeIcon('credit-card'),
    dash: new ThemeIcon('dash'),
    dashboard: new ThemeIcon('dashboard'),
    database: new ThemeIcon('database'),
    debug_alt: new ThemeIcon('debug-alt'),
    debug_breakpoint_conditional_unverified: new ThemeIcon('debug-breakpoint-conditional-unverified'),
    debug_breakpoint_conditional: new ThemeIcon('debug-breakpoint-conditional'),
    debug_breakpoint_data_unverified: new ThemeIcon('debug-breakpoint-data-unverified'),
    debug_breakpoint_data: new ThemeIcon('debug-breakpoint-data'),
    debug_breakpoint_function_unverified: new ThemeIcon('debug-breakpoint-function-unverified'),
    debug_breakpoint_function: new ThemeIcon('debug-breakpoint-function'),
    debug_breakpoint_log_unverified: new ThemeIcon('debug-breakpoint-log-unverified'),
    debug_breakpoint_log: new ThemeIcon('debug-breakpoint-log'),
    debug_breakpoint_unsupported: new ThemeIcon('debug-breakpoint-unsupported'),
    debug_console: new ThemeIcon('debug-console'),
    debug_continue: new ThemeIcon('debug-continue'),
    debug_disconnect: new ThemeIcon('debug-disconnect'),
    debug_pause: new ThemeIcon('debug-pause'),
    debug_restart_frame: new ThemeIcon('debug-restart-frame'),
    debug_restart: new ThemeIcon('debug-restart'),
    debug_reverse_continue: new ThemeIcon('debug-reverse-continue'),
    debug_stackframe_active: new ThemeIcon('debug-stackframe-active'),
    debug_stackframe_dot: new ThemeIcon('debug-stackframe-dot'),
    debug_stackframe: new ThemeIcon('debug-stackframe'),
    debug_start: new ThemeIcon('debug-start'),
    debug_step_back: new ThemeIcon('debug-step-back'),
    debug_step_into: new ThemeIcon('debug-step-into'),
    debug_step_out: new ThemeIcon('debug-step-out'),
    debug_step_over: new ThemeIcon('debug-step-over'),
    debug_stop: new ThemeIcon('debug-stop'),
    debug: new ThemeIcon('debug'),
    desktop_download: new ThemeIcon('desktop-download'),
    device_camera_video: new ThemeIcon('device-camera-video'),
    device_camera: new ThemeIcon('device-camera'),
    device_mobile: new ThemeIcon('device-mobile'),
    diff_added: new ThemeIcon('diff-added'),
    diff_ignored: new ThemeIcon('diff-ignored'),
    diff_modified: new ThemeIcon('diff-modified'),
    diff_removed: new ThemeIcon('diff-removed'),
    diff_renamed: new ThemeIcon('diff-renamed'),
    diff: new ThemeIcon('diff'),
    discard: new ThemeIcon('discard'),
    edit: new ThemeIcon('edit'),
    editor_layout: new ThemeIcon('editor-layout'),
    ellipsis: new ThemeIcon('ellipsis'),
    empty_window: new ThemeIcon('empty-window'),
    error: new ThemeIcon('error'),
    exclude: new ThemeIcon('exclude'),
    expand_all: new ThemeIcon('expand-all'),
    extensions: new ThemeIcon('extensions'),
    eye_closed: new ThemeIcon('eye-closed'),
    eye: new ThemeIcon('eye'),
    feedback: new ThemeIcon('feedback'),
    file_binary: new ThemeIcon('file-binary'),
    file_code: new ThemeIcon('file-code'),
    file_media: new ThemeIcon('file-media'),
    file_pdf: new ThemeIcon('file-pdf'),
    file_submodule: new ThemeIcon('file-submodule'),
    file_symlink_directory: new ThemeIcon('file-symlink-directory'),
    file_symlink_file: new ThemeIcon('file-symlink-file'),
    file_zip: new ThemeIcon('file-zip'),
    file: new ThemeIcon('file'),
    files: new ThemeIcon('files'),
    filter: new ThemeIcon('filter'),
    flame: new ThemeIcon('flame'),
    fold_down: new ThemeIcon('fold-down'),
    fold_up: new ThemeIcon('fold-up'),
    fold: new ThemeIcon('fold'),
    folder_active: new ThemeIcon('folder-active'),
    folder_opened: new ThemeIcon('folder-opened'),
    folder: new ThemeIcon('folder'),
    gear: new ThemeIcon('gear'),
    gift: new ThemeIcon('gift'),
    gist_secret: new ThemeIcon('gist-secret'),
    gist: new ThemeIcon('gist'),
    git_commit: new ThemeIcon('git-commit'),
    git_compare: new ThemeIcon('git-compare'),
    git_merge: new ThemeIcon('git-merge'),
    git_pull_request: new ThemeIcon('git-pull-request'),
    github_action: new ThemeIcon('github-action'),
    github_alt: new ThemeIcon('github-alt'),
    github_inverted: new ThemeIcon('github-inverted'),
    github: new ThemeIcon('github'),
    globe: new ThemeIcon('globe'),
    go_to_file: new ThemeIcon('go-to-file'),
    grabber: new ThemeIcon('grabber'),
    graph: new ThemeIcon('graph'),
    gripper: new ThemeIcon('gripper'),
    group_by_ref_type: new ThemeIcon('group-by-ref-type'),
    heart: new ThemeIcon('heart'),
    history: new ThemeIcon('history'),
    home: new ThemeIcon('home'),
    horizontal_rule: new ThemeIcon('horizontal-rule'),
    hubot: new ThemeIcon('hubot'),
    inbox: new ThemeIcon('inbox'),
    info: new ThemeIcon('info'),
    issue_closed: new ThemeIcon('issue-closed'),
    issue_reopened: new ThemeIcon('issue-reopened'),
    issues: new ThemeIcon('issues'),
    italic: new ThemeIcon('italic'),
    jersey: new ThemeIcon('jersey'),
    json: new ThemeIcon('json'),
    kebab_vertical: new ThemeIcon('kebab-vertical'),
    key: new ThemeIcon('key'),
    law: new ThemeIcon('law'),
    library: new ThemeIcon('library'),
    lightbulb_autofix: new ThemeIcon('lightbulb-autofix'),
    lightbulb: new ThemeIcon('lightbulb'),
    link_external: new ThemeIcon('link-external'),
    link: new ThemeIcon('link'),
    list_filter: new ThemeIcon('list-filter'),
    list_flat: new ThemeIcon('list-flat'),
    list_ordered: new ThemeIcon('list-ordered'),
    list_selection: new ThemeIcon('list-selection'),
    list_tree: new ThemeIcon('list-tree'),
    list_unordered: new ThemeIcon('list-unordered'),
    live_share: new ThemeIcon('live-share'),
    loading: new ThemeIcon('loading'),
    location: new ThemeIcon('location'),
    lock: new ThemeIcon('lock'),
    mail_read: new ThemeIcon('mail-read'),
    mail: new ThemeIcon('mail'),
    markdown: new ThemeIcon('markdown'),
    megaphone: new ThemeIcon('megaphone'),
    mention: new ThemeIcon('mention'),
    menu: new ThemeIcon('menu'),
    milestone: new ThemeIcon('milestone'),
    mirror: new ThemeIcon('mirror'),
    mortar_board: new ThemeIcon('mortar-board'),
    move: new ThemeIcon('move'),
    multiple_windows: new ThemeIcon('multiple-windows'),
    mute: new ThemeIcon('mute'),
    new_file: new ThemeIcon('new-file'),
    new_folder: new ThemeIcon('new-folder'),
    no_newline: new ThemeIcon('no-newline'),
    note: new ThemeIcon('note'),
    octoface: new ThemeIcon('octoface'),
    open_preview: new ThemeIcon('open-preview'),
    organization: new ThemeIcon('organization'),
    output: new ThemeIcon('output'),
    package: new ThemeIcon('package'),
    paintcan: new ThemeIcon('paintcan'),
    pass: new ThemeIcon('pass'),
    person: new ThemeIcon('person'),
    pin: new ThemeIcon('pin'),
    pinned: new ThemeIcon('pinned'),
    play_circle: new ThemeIcon('play-circle'),
    play: new ThemeIcon('play'),
    plug: new ThemeIcon('plug'),
    preserve_case: new ThemeIcon('preserve-case'),
    preview: new ThemeIcon('preview'),
    primitive_square: new ThemeIcon('primitive-square'),
    project: new ThemeIcon('project'),
    pulse: new ThemeIcon('pulse'),
    question: new ThemeIcon('question'),
    quote: new ThemeIcon('quote'),
    radio_tower: new ThemeIcon('radio-tower'),
    reactions: new ThemeIcon('reactions'),
    record_keys: new ThemeIcon('record-keys'),
    record: new ThemeIcon('record'),
    references: new ThemeIcon('references'),
    refresh: new ThemeIcon('refresh'),
    regex: new ThemeIcon('regex'),
    remote_explorer: new ThemeIcon('remote-explorer'),
    remote: new ThemeIcon('remote'),
    remove: new ThemeIcon('remove'),
    replace_all: new ThemeIcon('replace-all'),
    replace: new ThemeIcon('replace'),
    reply: new ThemeIcon('reply'),
    repo_clone: new ThemeIcon('repo-clone'),
    repo_force_push: new ThemeIcon('repo-force-push'),
    repo_forked: new ThemeIcon('repo-forked'),
    repo_pull: new ThemeIcon('repo-pull'),
    repo_push: new ThemeIcon('repo-push'),
    repo: new ThemeIcon('repo'),
    report: new ThemeIcon('report'),
    request_changes: new ThemeIcon('request-changes'),
    rocket: new ThemeIcon('rocket'),
    root_folder_opened: new ThemeIcon('root-folder-opened'),
    root_folder: new ThemeIcon('root-folder'),
    rss: new ThemeIcon('rss'),
    ruby: new ThemeIcon('ruby'),
    run_all: new ThemeIcon('run-all'),
    save_all: new ThemeIcon('save-all'),
    save_as: new ThemeIcon('save-as'),
    save: new ThemeIcon('save'),
    screen_full: new ThemeIcon('screen-full'),
    screen_normal: new ThemeIcon('screen-normal'),
    search_stop: new ThemeIcon('search-stop'),
    search: new ThemeIcon('search'),
    server_environment: new ThemeIcon('server-environment'),
    server_process: new ThemeIcon('server-process'),
    server: new ThemeIcon('server'),
    settings_gear: new ThemeIcon('settings-gear'),
    settings: new ThemeIcon('settings'),
    shield: new ThemeIcon('shield'),
    sign_in: new ThemeIcon('sign-in'),
    sign_out: new ThemeIcon('sign-out'),
    smiley: new ThemeIcon('smiley'),
    sort_precedence: new ThemeIcon('sort-precedence'),
    source_control: new ThemeIcon('source-control'),
    split_horizontal: new ThemeIcon('split-horizontal'),
    split_vertical: new ThemeIcon('split-vertical'),
    squirrel: new ThemeIcon('squirrel'),
    star_empty: new ThemeIcon('star-empty'),
    star_full: new ThemeIcon('star-full'),
    star_half: new ThemeIcon('star-half'),
    stop_circle: new ThemeIcon('stop-circle'),
    symbol_array: new ThemeIcon('symbol-array'),
    symbol_boolean: new ThemeIcon('symbol-boolean'),
    symbol_class: new ThemeIcon('symbol-class'),
    symbol_color: new ThemeIcon('symbol-color'),
    symbol_constant: new ThemeIcon('symbol-constant'),
    symbol_enum_member: new ThemeIcon('symbol-enum-member'),
    symbol_enum: new ThemeIcon('symbol-enum'),
    symbol_event: new ThemeIcon('symbol-event'),
    symbol_field: new ThemeIcon('symbol-field'),
    symbol_file: new ThemeIcon('symbol-file'),
    symbol_interface: new ThemeIcon('symbol-interface'),
    symbol_key: new ThemeIcon('symbol-key'),
    symbol_keyword: new ThemeIcon('symbol-keyword'),
    symbol_method: new ThemeIcon('symbol-method'),
    symbol_misc: new ThemeIcon('symbol-misc'),
    symbol_namespace: new ThemeIcon('symbol-namespace'),
    symbol_numeric: new ThemeIcon('symbol-numeric'),
    symbol_operator: new ThemeIcon('symbol-operator'),
    symbol_parameter: new ThemeIcon('symbol-parameter'),
    symbol_property: new ThemeIcon('symbol-property'),
    symbol_ruler: new ThemeIcon('symbol-ruler'),
    symbol_snippet: new ThemeIcon('symbol-snippet'),
    symbol_string: new ThemeIcon('symbol-string'),
    symbol_structure: new ThemeIcon('symbol-structure'),
    symbol_variable: new ThemeIcon('symbol-variable'),
    sync_ignored: new ThemeIcon('sync-ignored'),
    sync: new ThemeIcon('sync'),
    tag: new ThemeIcon('tag'),
    tasklist: new ThemeIcon('tasklist'),
    telescope: new ThemeIcon('telescope'),
    terminal: new ThemeIcon('terminal'),
    text_size: new ThemeIcon('text-size'),
    three_bars: new ThemeIcon('three-bars'),
    thumbsdown: new ThemeIcon('thumbsdown'),
    thumbsup: new ThemeIcon('thumbsup'),
    tools: new ThemeIcon('tools'),
    trash: new ThemeIcon('trash'),
    triangle_down: new ThemeIcon('triangle-down'),
    triangle_left: new ThemeIcon('triangle-left'),
    triangle_right: new ThemeIcon('triangle-right'),
    triangle_up: new ThemeIcon('triangle-up'),
    twitter: new ThemeIcon('twitter'),
    unfold: new ThemeIcon('unfold'),
    ungroup_by_ref_type: new ThemeIcon('ungroup-by-ref-type'),
    unlock: new ThemeIcon('unlock'),
    unmute: new ThemeIcon('unmute'),
    unverified: new ThemeIcon('unverified'),
    verified: new ThemeIcon('verified'),
    versions: new ThemeIcon('versions'),
    vm_active: new ThemeIcon('vm-active'),
    vm_outline: new ThemeIcon('vm-outline'),
    vm_running: new ThemeIcon('vm-running'),
    vm: new ThemeIcon('vm'),
    warning: new ThemeIcon('warning'),
    watch: new ThemeIcon('watch'),
    whitespace: new ThemeIcon('whitespace'),
    whole_word: new ThemeIcon('whole-word'),
    window: new ThemeIcon('window'),
    word_wrap: new ThemeIcon('word-wrap'),
    zoom_in: new ThemeIcon('zoom-in'),
    zoom_out: new ThemeIcon('zoom-out'),
};

const codicons = {
    account: '$(account)',
    activate_breakpoints: '$(activate-breakpoints)',
    add: '$(add)',
    archive: '$(archive)',
    arrow_both: '$(arrow-both)',
    arrow_down: '$(arrow-down)',
    arrow_left: '$(arrow-left)',
    arrow_right: '$(arrow-right)',
    arrow_small_down: '$(arrow-small-down)',
    arrow_small_left: '$(arrow-small-left)',
    arrow_small_right: '$(arrow-small-right)',
    arrow_small_up: '$(arrow-small-up)',
    arrow_up: '$(arrow-up)',
    beaker: '$(beaker)',
    bell_dot: '$(bell-dot)',
    bell: '$(bell)',
    bold: '$(bold)',
    book: '$(book)',
    bookmark: '$(bookmark)',
    briefcase: '$(briefcase)',
    broadcast: '$(broadcast)',
    browser: '$(browser)',
    bug: '$(bug)',
    calendar: '$(calendar)',
    call_incoming: '$(call-incoming)',
    call_outgoing: '$(call-outgoing)',
    case_sensitive: '$(case-sensitive)',
    check: '$(check)',
    checklist: '$(checklist)',
    chevron_down: '$(chevron-down)',
    chevron_left: '$(chevron-left)',
    chevron_right: '$(chevron-right)',
    chevron_up: '$(chevron-up)',
    chrome_close: '$(chrome-close)',
    chrome_maximize: '$(chrome-maximize)',
    chrome_minimize: '$(chrome-minimize)',
    chrome_restore: '$(chrome-restore)',
    circle_filled: '$(circle-filled)',
    circle_outline: '$(circle-outline)',
    circle_slash: '$(circle-slash)',
    circuit_board: '$(circuit-board)',
    clear_all: '$(clear-all)',
    clippy: '$(clippy)',
    close_all: '$(close-all)',
    close: '$(close)',
    cloud_download: '$(cloud-download)',
    cloud_upload: '$(cloud-upload)',
    code: '$(code)',
    collapse_all: '$(collapse-all)',
    color_mode: '$(color-mode)',
    comment_discussion: '$(comment-discussion)',
    comment: '$(comment)',
    credit_card: '$(credit-card)',
    dash: '$(dash)',
    dashboard: '$(dashboard)',
    database: '$(database)',
    debug_alt: '$(debug-alt)',
    debug_breakpoint_conditional_unverified: '$(debug-breakpoint-conditional-unverified)',
    debug_breakpoint_conditional: '$(debug-breakpoint-conditional)',
    debug_breakpoint_data_unverified: '$(debug-breakpoint-data-unverified)',
    debug_breakpoint_data: '$(debug-breakpoint-data)',
    debug_breakpoint_function_unverified: '$(debug-breakpoint-function-unverified)',
    debug_breakpoint_function: '$(debug-breakpoint-function)',
    debug_breakpoint_log_unverified: '$(debug-breakpoint-log-unverified)',
    debug_breakpoint_log: '$(debug-breakpoint-log)',
    debug_breakpoint_unsupported: '$(debug-breakpoint-unsupported)',
    debug_console: '$(debug-console)',
    debug_continue: '$(debug-continue)',
    debug_disconnect: '$(debug-disconnect)',
    debug_pause: '$(debug-pause)',
    debug_restart_frame: '$(debug-restart-frame)',
    debug_restart: '$(debug-restart)',
    debug_reverse_continue: '$(debug-reverse-continue)',
    debug_stackframe_active: '$(debug-stackframe-active)',
    debug_stackframe_dot: '$(debug-stackframe-dot)',
    debug_stackframe: '$(debug-stackframe)',
    debug_start: '$(debug-start)',
    debug_step_back: '$(debug-step-back)',
    debug_step_into: '$(debug-step-into)',
    debug_step_out: '$(debug-step-out)',
    debug_step_over: '$(debug-step-over)',
    debug_stop: '$(debug-stop)',
    debug: '$(debug)',
    desktop_download: '$(desktop-download)',
    device_camera_video: '$(device-camera-video)',
    device_camera: '$(device-camera)',
    device_mobile: '$(device-mobile)',
    diff_added: '$(diff-added)',
    diff_ignored: '$(diff-ignored)',
    diff_modified: '$(diff-modified)',
    diff_removed: '$(diff-removed)',
    diff_renamed: '$(diff-renamed)',
    diff: '$(diff)',
    discard: '$(discard)',
    edit: '$(edit)',
    editor_layout: '$(editor-layout)',
    ellipsis: '$(ellipsis)',
    empty_window: '$(empty-window)',
    error: '$(error)',
    exclude: '$(exclude)',
    expand_all: '$(expand-all)',
    extensions: '$(extensions)',
    eye_closed: '$(eye-closed)',
    eye: '$(eye)',
    feedback: '$(feedback)',
    file_binary: '$(file-binary)',
    file_code: '$(file-code)',
    file_media: '$(file-media)',
    file_pdf: '$(file-pdf)',
    file_submodule: '$(file-submodule)',
    file_symlink_directory: '$(file-symlink-directory)',
    file_symlink_file: '$(file-symlink-file)',
    file_zip: '$(file-zip)',
    file: '$(file)',
    files: '$(files)',
    filter: '$(filter)',
    flame: '$(flame)',
    fold_down: '$(fold-down)',
    fold_up: '$(fold-up)',
    fold: '$(fold)',
    folder_active: '$(folder-active)',
    folder_opened: '$(folder-opened)',
    folder: '$(folder)',
    gear: '$(gear)',
    gift: '$(gift)',
    gist_secret: '$(gist-secret)',
    gist: '$(gist)',
    git_commit: '$(git-commit)',
    git_compare: '$(git-compare)',
    git_merge: '$(git-merge)',
    git_pull_request: '$(git-pull-request)',
    github_action: '$(github-action)',
    github_alt: '$(github-alt)',
    github_inverted: '$(github-inverted)',
    github: '$(github)',
    globe: '$(globe)',
    go_to_file: '$(go-to-file)',
    grabber: '$(grabber)',
    graph: '$(graph)',
    gripper: '$(gripper)',
    group_by_ref_type: '$(group-by-ref-type)',
    heart: '$(heart)',
    history: '$(history)',
    home: '$(home)',
    horizontal_rule: '$(horizontal-rule)',
    hubot: '$(hubot)',
    inbox: '$(inbox)',
    info: '$(info)',
    issue_closed: '$(issue-closed)',
    issue_reopened: '$(issue-reopened)',
    issues: '$(issues)',
    italic: '$(italic)',
    jersey: '$(jersey)',
    json: '$(json)',
    kebab_vertical: '$(kebab-vertical)',
    key: '$(key)',
    law: '$(law)',
    library: '$(library)',
    lightbulb_autofix: '$(lightbulb-autofix)',
    lightbulb: '$(lightbulb)',
    link_external: '$(link-external)',
    link: '$(link)',
    list_filter: '$(list-filter)',
    list_flat: '$(list-flat)',
    list_ordered: '$(list-ordered)',
    list_selection: '$(list-selection)',
    list_tree: '$(list-tree)',
    list_unordered: '$(list-unordered)',
    live_share: '$(live-share)',
    loading: '$(loading)',
    location: '$(location)',
    lock: '$(lock)',
    mail_read: '$(mail-read)',
    mail: '$(mail)',
    markdown: '$(markdown)',
    megaphone: '$(megaphone)',
    mention: '$(mention)',
    menu: '$(menu)',
    milestone: '$(milestone)',
    mirror: '$(mirror)',
    mortar_board: '$(mortar-board)',
    move: '$(move)',
    multiple_windows: '$(multiple-windows)',
    mute: '$(mute)',
    new_file: '$(new-file)',
    new_folder: '$(new-folder)',
    no_newline: '$(no-newline)',
    note: '$(note)',
    octoface: '$(octoface)',
    open_preview: '$(open-preview)',
    organization: '$(organization)',
    output: '$(output)',
    package: '$(package)',
    paintcan: '$(paintcan)',
    pass: '$(pass)',
    person: '$(person)',
    pin: '$(pin)',
    pinned: '$(pinned)',
    play_circle: '$(play-circle)',
    play: '$(play)',
    plug: '$(plug)',
    preserve_case: '$(preserve-case)',
    preview: '$(preview)',
    primitive_square: '$(primitive-square)',
    project: '$(project)',
    pulse: '$(pulse)',
    question: '$(question)',
    quote: '$(quote)',
    radio_tower: '$(radio-tower)',
    reactions: '$(reactions)',
    record_keys: '$(record-keys)',
    record: '$(record)',
    references: '$(references)',
    refresh: '$(refresh)',
    regex: '$(regex)',
    remote_explorer: '$(remote-explorer)',
    remote: '$(remote)',
    remove: '$(remove)',
    replace_all: '$(replace-all)',
    replace: '$(replace)',
    reply: '$(reply)',
    repo_clone: '$(repo-clone)',
    repo_force_push: '$(repo-force-push)',
    repo_forked: '$(repo-forked)',
    repo_pull: '$(repo-pull)',
    repo_push: '$(repo-push)',
    repo: '$(repo)',
    report: '$(report)',
    request_changes: '$(request-changes)',
    rocket: '$(rocket)',
    root_folder_opened: '$(root-folder-opened)',
    root_folder: '$(root-folder)',
    rss: '$(rss)',
    ruby: '$(ruby)',
    run_all: '$(run-all)',
    save_all: '$(save-all)',
    save_as: '$(save-as)',
    save: '$(save)',
    screen_full: '$(screen-full)',
    screen_normal: '$(screen-normal)',
    search_stop: '$(search-stop)',
    search: '$(search)',
    server_environment: '$(server-environment)',
    server_process: '$(server-process)',
    server: '$(server)',
    settings_gear: '$(settings-gear)',
    settings: '$(settings)',
    shield: '$(shield)',
    sign_in: '$(sign-in)',
    sign_out: '$(sign-out)',
    smiley: '$(smiley)',
    sort_precedence: '$(sort-precedence)',
    source_control: '$(source-control)',
    split_horizontal: '$(split-horizontal)',
    split_vertical: '$(split-vertical)',
    squirrel: '$(squirrel)',
    star_empty: '$(star-empty)',
    star_full: '$(star-full)',
    star_half: '$(star-half)',
    stop_circle: '$(stop-circle)',
    symbol_array: '$(symbol-array)',
    symbol_boolean: '$(symbol-boolean)',
    symbol_class: '$(symbol-class)',
    symbol_color: '$(symbol-color)',
    symbol_constant: '$(symbol-constant)',
    symbol_enum_member: '$(symbol-enum-member)',
    symbol_enum: '$(symbol-enum)',
    symbol_event: '$(symbol-event)',
    symbol_field: '$(symbol-field)',
    symbol_file: '$(symbol-file)',
    symbol_interface: '$(symbol-interface)',
    symbol_key: '$(symbol-key)',
    symbol_keyword: '$(symbol-keyword)',
    symbol_method: '$(symbol-method)',
    symbol_misc: '$(symbol-misc)',
    symbol_namespace: '$(symbol-namespace)',
    symbol_numeric: '$(symbol-numeric)',
    symbol_operator: '$(symbol-operator)',
    symbol_parameter: '$(symbol-parameter)',
    symbol_property: '$(symbol-property)',
    symbol_ruler: '$(symbol-ruler)',
    symbol_snippet: '$(symbol-snippet)',
    symbol_string: '$(symbol-string)',
    symbol_structure: '$(symbol-structure)',
    symbol_variable: '$(symbol-variable)',
    sync_ignored: '$(sync-ignored)',
    sync: '$(sync)',
    tag: '$(tag)',
    tasklist: '$(tasklist)',
    telescope: '$(telescope)',
    terminal: '$(terminal)',
    text_size: '$(text-size)',
    three_bars: '$(three-bars)',
    thumbsdown: '$(thumbsdown)',
    thumbsup: '$(thumbsup)',
    tools: '$(tools)',
    trash: '$(trash)',
    triangle_down: '$(triangle-down)',
    triangle_left: '$(triangle-left)',
    triangle_right: '$(triangle-right)',
    triangle_up: '$(triangle-up)',
    twitter: '$(twitter)',
    unfold: '$(unfold)',
    ungroup_by_ref_type: '$(ungroup-by-ref-type)',
    unlock: '$(unlock)',
    unmute: '$(unmute)',
    unverified: '$(unverified)',
    verified: '$(verified)',
    versions: '$(versions)',
    vm_active: '$(vm-active)',
    vm_outline: '$(vm-outline)',
    vm_running: '$(vm-running)',
    vm: '$(vm)',
    warning: '$(warning)',
    watch: '$(watch)',
    whitespace: '$(whitespace)',
    whole_word: '$(whole-word)',
    window: '$(window)',
    word_wrap: '$(word-wrap)',
    zoom_in: '$(zoom-in)',
    zoom_out: '$(zoom-out)',
};

export { ThemeIcons, codicons };