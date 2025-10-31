
import asyncio
from playwright.async_api import async_playwright, expect

async def main():
    async with async_playwright() as p:
        browser = await p.chromium.launch(headless=True)
        page = await browser.new_page()

        try:
            await page.goto("http://localhost:5173")

            # Verify from home page featured products
            splendor_card_home = page.locator('.slick-active a[href="/splendor-bitters"]')
            await splendor_card_home.scroll_into_view_if_needed()
            await splendor_card_home.click()

            await page.wait_for_url("**/splendor-bitters")
            await expect(page).to_have_url("http://localhost:5173/splendor-bitters")
            await expect(page.get_by_alt_text("Splendor Bitters")).to_be_visible()
            await expect(page.get_by_text("For those who crave a taste that stands apart")).to_be_visible()
            await page.screenshot(path="jules-scratch/verification/splendor_bitters_page_from_home.png")

            # Verify from products page
            await page.goto("http://localhost:5173/products")
            splendor_card_products = page.locator('a[href="/splendor-bitters"]')
            await splendor_card_products.scroll_into_view_if_needed()
            await splendor_card_products.click()

            await page.wait_for_url("**/splendor-bitters")
            await expect(page).to_have_url("http://localhost:5173/splendor-bitters")
            await expect(page.get_by_alt_text("Splendor Bitters")).to_be_visible()
            await expect(page.get_by_text("For those who crave a taste that stands apart")).to_be_visible()
            await page.screenshot(path="jules-scratch/verification/splendor_bitters_page_from_products.png")

            print("Verification successful!")

        except Exception as e:
            print(f"Verification failed: {e}")
            await page.screenshot(path="jules-scratch/verification/error.png")
        finally:
            await browser.close()

if __name__ == "__main__":
    asyncio.run(main())
