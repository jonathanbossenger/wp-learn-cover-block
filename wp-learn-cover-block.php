<?php
/**
 * Plugin Name: WP Learn Cover Block
 */

add_action( 'init', 'wp_learn_cover_block_register' );
function wp_learn_cover_block_register() {
	register_block_type( __DIR__ . '/block' );
}
