from playwright.sync_api import Page, expect

def test_div_removal(page: Page):
    """
    This test verifies that the specified div is no longer present on the homepage.
    """
    # 1. Arrange: Go to the homepage.
    page.goto("http://127.0.0.1:5173")

    # 2. Assert: Check that the div is not present.
    # We are looking for a div that contains both "100% Natural" and "Traditional Recipe"
    locator = page.locator('div:has-text("100% Natural"):has-text("Traditional Recipe")')
    expect(locator).to_have_count(0)

    # 3. Screenshot: Capture the final result for visual verification.
    page.screenshot(path="jules-scratch/verification/verification.png")
