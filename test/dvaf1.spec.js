'use strict';

describe('story page', function() {

	beforeEach(function() {
		browser.ignoreSynchronization = true;
		browser.get( 'http://localhost:8000/src/' );
	});

	it('should have a title', function() {
		expect( browser.getTitle() ).toEqual( 'Prepare your application for a domestic violence protection order' );
	});

});