import Image from "next/image";
import Link from "next/link";

function Footer() {
  return (
    <footer className="bg-black text-white p-6">
      <section id="Footer">
        <div className="container mx-auto flex flex-col md:flex-row justify-between">
          <div className="mb-6 md:mb-0">
            <h2 className="text-yellow-400 text-2xl font-bold">Era by Tabsheera</h2>
            <p className="mt-2">
              Empowering individuals to express themselves through unique fashion.
            </p>
          </div>

          <div className="mb-6 md:mb-0">
            <h3 className="text-yellow-400 font-semibold">Quick Links</h3>
            <ul className="mt-2">
              <li className="mb-2">
                <Link href="/" className="hover:text-yellow-400">Home</Link>
              </li>
              <li className="mb-2">
                <Link href="#Clothes" className="hover:text-yellow-400">Category</Link>
              </li>
              <li className="mb-2">
                <Link href="#About" className="hover:text-yellow-400">About</Link>
              </li>
              <li>
                <Link href="#Footer" className="hover:text-yellow-400">Contact</Link>
              </li>
            </ul>
          </div>

        
          <div>
            <h3 className="text-yellow-400 font-semibold">Follow Us</h3>
            <div className="flex gap-4 mt-2">
              <Link href="#" className="hover:text-yellow-400">
                <Image
                  src="https://cdn-icons-png.flaticon.com/512/733/733547.png" 
                  alt="Facebook"
                  width={24}
                  height={24}
                />
              </Link>
              <Link href="#" className="hover:text-yellow-400">
                <Image
                  src="https://cdn-icons-png.flaticon.com/512/733/733579.png" 
                  alt="Twitter"
                  width={24}
                  height={24}
                />
              </Link>
              <Link href="#" className="hover:text-yellow-400">
                <Image
                  src="https://cdn-icons-png.flaticon.com/512/733/733558.png" 
                  alt="Instagram"
                  width={24}
                  height={24}
                />
              </Link>
             
              <Link href="https://pk.linkedin.com/in/tabsheera-shakeel-116555300" className="hover:text-yellow-400" target="_blank" rel="noopener noreferrer">
                <Image
                  src="https://cdn-icons-png.flaticon.com/512/733/733561.png" 
                  alt="LinkedIn"
                  width={24}
                  height={24}
                />
              </Link>
            </div>
          </div>
        </div>

        <div className="mt-6 text-center">
          <p className="text-gray-400 text-sm">
            &copy; {new Date().getFullYear()} Era by Tabsheera. All rights reserved.
          </p>
        </div>
      </section>
    </footer>
  );
}

export default Footer;