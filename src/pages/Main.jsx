import profilePicture from "../assets/my_profile_picture.jpg";

export default function Main() {
    return (
        <main id="main" className="min-h-screen flex items-center justify-center pt-24">
            <div className="flex flex-col items-center space-y-8">
                {/* Profile Picture with Outline */}
                <div className="relative w-48 h-48 rounded-full overflow-hidden border-4 border-orange-500 shadow-lg">
                    <img
                        src={profilePicture}
                        alt="Profile"
                        className="w-full h-full object-cover"
                    />
                </div>

                {/* Welcome Text */}
                <div className="text-center">
                    <h1 className="text-4xl font-bold mb-4">
                        JOSEPH JOHN PAUL ALMAZAN
                    </h1>

                    <h1 className="text-4xl font-bold mb-4">
                        IT STUDENT
                    </h1>
                    <p className="text-lg">
                        
                        Passionate dedicated adaptable
                    </p>
                </div>
            </div>
        </main>
    );
}